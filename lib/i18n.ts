import { cookies } from 'next/headers';

export type Lang = 'en' | 'es';

const LANG_COOKIE = 'lang';

const dict = {
  siteTitle: {
    en: 'Next.js Supabase Auth Starter',
    es: 'Starter de Next.js + Supabase Auth'
  },
  siteTagline: {
    en: 'Minimal starter for Supabase Auth + SSR session refresh + RLS-first database posture.',
    es: 'Starter mínimo para Supabase Auth + refresco de sesión SSR + postura de base de datos primero con RLS.'
  },
  signIn: {
    en: 'Sign in',
    es: 'Iniciar sesión'
  },
  app: {
    en: 'App',
    es: 'App'
  },
  home: {
    en: 'Home',
    es: 'Inicio'
  },
  back: {
    en: 'Back',
    es: 'Volver'
  },
  signOut: {
    en: 'Sign out',
    es: 'Cerrar sesión'
  },
  signInTitle: {
    en: 'Sign in',
    es: 'Iniciar sesión'
  },
  signInIntro: {
    en: "This demo uses passwordless email magic links. We'll email you a link to sign in.",
    es: 'Este demo usa enlaces mágicos por correo (sin contraseña). Te enviaremos un enlace para iniciar sesión.'
  },
  signInNote: {
    en: 'No username or password. If you sign out, you’ll request a new link next time.',
    es: 'Sin usuario ni contraseña. Si cierras sesión, la próxima vez solicitarás un nuevo enlace.'
  },
  email: {
    en: 'Email',
    es: 'Correo'
  },
  sendLink: {
    en: 'Send link',
    es: 'Enviar enlace'
  },
  checkEmailTitle: {
    en: 'Check your email for a sign-in link.',
    es: 'Revisa tu correo para el enlace de acceso.'
  },
  checkEmailTip: {
    en: 'Open the link on the same device/browser if possible.',
    es: 'Abre el enlace en el mismo dispositivo/navegador si es posible.'
  },
  invalidEmail: {
    en: 'Please enter a valid email address.',
    es: 'Por favor ingresa un correo válido.'
  },
  authFailed: {
    en: 'Unable to send sign-in link. Please try again.',
    es: 'No se pudo enviar el enlace. Intenta de nuevo.'
  },
  dashboardTitle: {
    en: 'Dashboard',
    es: 'Panel'
  },
  dashboardSubtitle: {
    en: 'Session + RLS proof playground.',
    es: 'Zona de prueba de sesión + prueba de RLS.'
  },
  sessionProofTitle: {
    en: 'Session / SSR Proof',
    es: 'Prueba de sesión / SSR'
  },
  signedIn: {
    en: 'Signed in',
    es: 'Con sesión'
  },
  yes: {
    en: 'yes',
    es: 'sí'
  },
  no: {
    en: 'no',
    es: 'no'
  },
  userId: {
    en: 'User ID',
    es: 'ID de usuario'
  },
  role: {
    en: 'Role',
    es: 'Rol'
  },
  serverTime: {
    en: 'Server time',
    es: 'Hora del servidor'
  },
  unknown: {
    en: 'unknown',
    es: 'desconocido'
  },
  notesTitle: {
    en: 'Notes (RLS Proof)',
    es: 'Notas (prueba de RLS)'
  },
  notesSubtitle: {
    en: 'You should only ever see your own notes.',
    es: 'Solo deberías ver tus propias notas.'
  },
  notePlaceholder: {
    en: 'Write a note...',
    es: 'Escribe una nota...'
  },
  add: {
    en: 'Add',
    es: 'Agregar'
  },
  delete: {
    en: 'Delete',
    es: 'Eliminar'
  },
  noNotes: {
    en: 'No notes yet.',
    es: 'Aún no hay notas.'
  },
  adminTitle: {
    en: 'Admin',
    es: 'Admin'
  },
  adminSubtitle: {
    en: 'Admin area.',
    es: 'Área de administrador.'
  }
} as const;

export type I18nKey = keyof typeof dict;

export function getLang(): Lang {
  const value = cookies().get(LANG_COOKIE)?.value;
  return value === 'es' ? 'es' : 'en';
}

export function t(lang: Lang, key: I18nKey): string {
  return dict[key][lang];
}
