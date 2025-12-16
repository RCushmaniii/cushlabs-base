'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { requireUser } from '@/lib/auth/require-user';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const createNoteSchema = z.object({
  content: z.string().min(1).max(500)
});

export async function createNote(formData: FormData) {
  const user = await requireUser();

  const content = formData.get('content');
  const parsed = createNoteSchema.safeParse({ content });
  if (!parsed.success) {
    revalidatePath('/app');
    return;
  }

  const supabase = createSupabaseServerClient();
  await supabase.from('notes').insert({
    user_id: user.id,
    content: parsed.data.content
  });

  revalidatePath('/app');
}

const deleteNoteSchema = z.object({
  id: z.string().uuid()
});

export async function deleteNote(formData: FormData) {
  const user = await requireUser();

  const id = formData.get('id');
  const parsed = deleteNoteSchema.safeParse({ id });
  if (!parsed.success) {
    revalidatePath('/app');
    return;
  }

  const supabase = createSupabaseServerClient();
  await supabase.from('notes').delete().eq('id', parsed.data.id).eq('user_id', user.id);

  revalidatePath('/app');
}
