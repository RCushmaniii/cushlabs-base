export type Lang = 'en' | 'es';

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
  about: {
    en: 'About',
    es: 'Acerca de'
  },
  github: {
    en: 'GitHub',
    es: 'GitHub'
  },
  docs: {
    en: 'Docs',
    es: 'Docs'
  },
  product: {
    en: 'Product',
    es: 'Producto'
  },
  footerTagline: {
    en: 'Built by Robert Cushman for builders who want real auth + real database security.',
    es: 'Construido por Robert Cushman para builders que quieren auth real + seguridad real en la base de datos.'
  },
  copyright: {
    en: '© 2025 CushLabs.ai. All rights reserved.',
    es: '© 2025 CushLabs.ai. Todos los derechos reservados.'
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
  demoStepsTitle: {
    en: 'Demo steps',
    es: 'Pasos del demo'
  },
  demoStepsIntro: {
    en: 'Use this page to verify Auth, SSR session refresh, and RLS isolation.',
    es: 'Usa esta página para verificar Auth, refresco de sesión SSR y aislamiento con RLS.'
  },
  demoStep1: {
    en: 'Sign in via magic link, then return here.',
    es: 'Inicia sesión con el enlace mágico y vuelve aquí.'
  },
  demoStep2: {
    en: 'Confirm the Session / SSR Proof panel shows your server-derived user info.',
    es: 'Confirma que el panel de sesión / SSR muestre tu usuario desde el servidor.'
  },
  demoStep3: {
    en: 'Create a note. Sign out and sign in with a different email — you should not see the first user’s notes.',
    es: 'Crea una nota. Cierra sesión e inicia con otro correo — no deberías ver las notas del primer usuario.'
  },
  demoStep4: {
    en: 'Optional: promote yourself to admin (profiles.role) and visit /admin to test admin gating.',
    es: 'Opcional: promuévete a admin (profiles.role) y visita /admin para probar el acceso de admin.'
  },
  adminTitle: {
    en: 'Admin',
    es: 'Admin'
  },
  adminSubtitle: {
    en: 'Admin area.',
    es: 'Área de administrador.'
  },
  aboutTitle: {
    en: 'About the Starter',
    es: 'Acerca del Starter'
  },
  aboutSubtitle: {
    en: 'A small, production-minded demo for passwordless auth, SSR sessions, and RLS-first data access.',
    es: 'Un demo pequeño y listo para producción de auth sin contraseña, sesiones SSR y acceso a datos primero con RLS.'
  },
  aboutSection1Title: {
    en: 'Stop guessing your auth posture',
    es: 'Deja de adivinar tu postura de auth'
  },
  aboutSection1Body: {
    en: 'This starter shows a real Supabase Auth flow and proves the session on the server, not just in the browser.',
    es: 'Este starter muestra un flujo real de Supabase Auth y prueba la sesión en el servidor, no solo en el navegador.'
  },
  aboutSection2Title: {
    en: 'Built for the modern independent',
    es: 'Hecho para el independiente moderno'
  },
  aboutSection2Body: {
    en: 'A clean baseline for solo founders, consultants, and small teams who need secure defaults and fast iteration.',
    es: 'Una base limpia para founders, consultores y equipos pequeños que necesitan defaults seguros e iteración rápida.'
  },
  aboutSection3Title: {
    en: 'RLS-first by default',
    es: 'RLS primero por defecto'
  },
  aboutSection3Body: {
    en: 'Notes are protected with strict per-user Row Level Security policies so you can demo real isolation across accounts.',
    es: 'Las notas están protegidas con políticas estrictas de Row Level Security por usuario para demostrar aislamiento real entre cuentas.'
  },
  aboutSection4Title: {
    en: 'SSR session refresh',
    es: 'Refresco de sesión SSR'
  },
  aboutSection4Body: {
    en: 'Middleware refresh keeps sessions stable across server navigation and shows the user on the server-rendered page.',
    es: 'El refresco en middleware mantiene sesiones estables durante navegación SSR y muestra el usuario en la página renderizada por el servidor.'
  },
  aboutUnderHoodTitle: {
    en: 'Under the hood',
    es: 'Bajo el capó'
  },
  aboutUnderHoodFrameworkLabel: {
    en: 'Framework',
    es: 'Framework'
  },
  aboutUnderHoodFrameworkValue: {
    en: 'Next.js (App Router) + React + TypeScript',
    es: 'Next.js (App Router) + React + TypeScript'
  },
  aboutUnderHoodAuthLabel: {
    en: 'Auth',
    es: 'Auth'
  },
  aboutUnderHoodAuthValue: {
    en: 'Supabase Auth (magic link)',
    es: 'Supabase Auth (enlace mágico)'
  },
  aboutUnderHoodSecurityLabel: {
    en: 'Security',
    es: 'Seguridad'
  },
  aboutUnderHoodSecurityValue: {
    en: 'Postgres RLS policies + server-side enforcement',
    es: 'Políticas RLS de Postgres + enforcement server-side'
  },
  aboutUnderHoodI18nLabel: {
    en: 'Language',
    es: 'Idioma'
  },
  aboutUnderHoodI18nValue: {
    en: 'EN/ES via cookie + translation keys',
    es: 'EN/ES via cookie + llaves de traducción'
  },
  aboutBuilderTitle: {
    en: 'From the builder',
    es: 'Del builder'
  },
  aboutBuilderBody: {
    en: 'I built this as a concise proof-of-concept: real auth, real SSR, real RLS — without extra UI complexity.',
    es: 'Construí esto como una prueba de concepto concisa: auth real, SSR real, RLS real — sin complejidad extra de UI.'
  },
  aboutBuilderSignature: {
    en: '— Robert Cushman, Product Engineer',
    es: '— Robert Cushman, Product Engineer'
  }
} as const;

export type I18nKey = keyof typeof dict;

export function t(lang: Lang, key: I18nKey): string {
  return dict[key][lang];
}
