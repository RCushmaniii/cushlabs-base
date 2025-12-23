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
  why: {
    en: 'Why',
    es: 'Por qué'
  },
  whyTitle: {
    en: 'Why Use Magic Links?',
    es: '¿Por qué usar Magic Links?'
  },
  whySubtitle: {
    en: 'Discover the benefits of passwordless authentication.',
    es: 'Descubre los beneficios de la autenticación sin contraseña.'
  },
  whyIntro: {
    en: 'Supabase Magic Link is a passwordless sign-in method where users receive a unique, time-sensitive link by email. Clicking it signs them in - no password needed.',
    es: 'Supabase Magic Link es un método de inicio de sesión sin contraseña donde los usuarios reciben un enlace único con límite de tiempo por correo. Al hacer clic, inician sesión - sin necesidad de contraseña.'
  },
  whyUsefulTitle: {
    en: "Why it's useful",
    es: 'Por qué es útil'
  },
  whyUseful1Label: {
    en: 'Lower friction, higher conversion:',
    es: 'Menor fricción, mayor conversión:'
  },
  whyUseful1Text: {
    en: 'No password creation or "forgot password" loops - fewer drop-offs.',
    es: 'Sin creación de contraseña o bucles de "olvidé mi contraseña" - menos abandonos.'
  },
  whyUseful2Label: {
    en: 'Stronger security vs passwords:',
    es: 'Mayor seguridad vs contraseñas:'
  },
  whyUseful2Text: {
    en: 'Avoids weak/reused passwords and reduces credential stuffing risk.',
    es: 'Evita contraseñas débiles/reutilizadas y reduce el riesgo de relleno de credenciales.'
  },
  whyUseful3Label: {
    en: 'Less support overhead:',
    es: 'Menos carga de soporte:'
  },
  whyUseful3Text: {
    en: 'Fewer password reset tickets and fewer locked-out users.',
    es: 'Menos tickets de restablecimiento de contraseña y menos usuarios bloqueados.'
  },
  whyUseful4Label: {
    en: 'Built-in account recovery:',
    es: 'Recuperación de cuenta integrada:'
  },
  whyUseful4Text: {
    en: 'If they can access their email, they can regain access.',
    es: 'Si pueden acceder a su correo, pueden recuperar el acceso.'
  },
  whyBehaviorsTitle: {
    en: 'Key Supabase behaviors',
    es: 'Comportamientos clave de Supabase'
  },
  whyBehavior1Label: {
    en: 'One-time use:',
    es: 'Uso único:'
  },
  whyBehavior1Text: {
    en: 'Each link is valid for a single successful login attempt.',
    es: 'Cada enlace es válido para un único intento de inicio de sesión exitoso.'
  },
  whyBehavior2Label: {
    en: 'Optional auto user creation:',
    es: 'Creación automática de usuario opcional:'
  },
  whyBehavior2Text: {
    en: 'If enabled, signing in can create a new user automatically.',
    es: 'Si está habilitado, iniciar sesión puede crear un nuevo usuario automáticamente.'
  },
  whyBehavior3Label: {
    en: 'Configurable limits:',
    es: 'Límites configurables:'
  },
  whyBehavior3Text: {
    en: 'Links typically expire in about an hour, and requests are rate-limited to prevent abuse.',
    es: 'Los enlaces típicamente expiran en aproximadamente una hora, y las solicitudes tienen límite de tasa para prevenir abuso.'
  },
  whyBehavior4Label: {
    en: 'Custom email templates:',
    es: 'Plantillas de correo personalizadas:'
  },
  whyBehavior4Text: {
    en: 'You can brand the email content in the Supabase Dashboard.',
    es: 'Puedes personalizar el contenido del correo en el Dashboard de Supabase.'
  },
  whyUseCasesTitle: {
    en: 'Best-fit use cases',
    es: 'Casos de uso ideales'
  },
  whyUseCase1Label: {
    en: 'Marketing sites + lightweight apps:',
    es: 'Sitios de marketing + apps ligeras:'
  },
  whyUseCase1Text: {
    en: 'Landing page - "Get started" - instant login without password friction.',
    es: 'Página de inicio - "Comenzar" - inicio de sesión instantáneo sin fricción de contraseña.'
  },
  whyUseCase2Label: {
    en: 'Internal tools / admin dashboards:',
    es: 'Herramientas internas / dashboards de admin:'
  },
  whyUseCase2Text: {
    en: 'Fast access for trusted users without password management.',
    es: 'Acceso rápido para usuarios de confianza sin gestión de contraseñas.'
  },
  whyUseCase3Label: {
    en: 'Early-stage MVPs:',
    es: 'MVPs en etapa temprana:'
  },
  whyUseCase3Text: {
    en: 'Ship authentication quickly while keeping UX simple.',
    es: 'Implementa autenticación rápidamente manteniendo la UX simple.'
  },
  whyUseCase4Label: {
    en: 'B2B apps for busy professionals:',
    es: 'Apps B2B para profesionales ocupados:'
  },
  whyUseCase4Text: {
    en: "Users don't want another password - email links are familiar and fast.",
    es: 'Los usuarios no quieren otra contraseña - los enlaces por correo son familiares y rápidos.'
  },
  whyConsiderationsTitle: {
    en: 'Important considerations',
    es: 'Consideraciones importantes'
  },
  whyConsideration1Label: {
    en: 'Cross-device/browser caveat (PKCE):',
    es: 'Advertencia entre dispositivos/navegadores (PKCE):'
  },
  whyConsideration1Text: {
    en: 'The link usually must be opened in the same browser/device where it was requested, or it may fail as an invalid link.',
    es: 'El enlace generalmente debe abrirse en el mismo navegador/dispositivo donde se solicitó, o puede fallar como enlace inválido.'
  },
  whyConsideration2Label: {
    en: 'Email delivery dependency:',
    es: 'Dependencia de entrega de correo:'
  },
  whyConsideration2Text: {
    en: "If emails are delayed or flagged as spam, users can't log in.",
    es: 'Si los correos se retrasan o se marcan como spam, los usuarios no pueden iniciar sesión.'
  },
  whyConsideration3Label: {
    en: 'If cross-device matters:',
    es: 'Si importa entre dispositivos:'
  },
  whyConsideration3Text: {
    en: 'Consider Email OTP (6-digit codes) for better cross-device compatibility while staying passwordless.',
    es: 'Considera Email OTP (códigos de 6 dígitos) para mejor compatibilidad entre dispositivos manteniendo sin contraseña.'
  },
  aboutTitle: {
    en: 'About the Starter',
    es: 'Acerca del Starter'
  },
  aboutSubtitle: {
    en: 'Passwordless authentication made simple with Supabase Magic Links. No passwords to manage, no security risks, just seamless access.',
    es: 'Autenticación sin contraseña simplificada con Supabase Magic Links. Sin contraseñas que gestionar, sin riesgos de seguridad, solo acceso sin fricciones.'
  },
  aboutFeaturesTitle: {
    en: 'Features & Benefits',
    es: 'Características y Beneficios'
  },
  aboutFeature1Title: {
    en: 'Zero Password Friction',
    es: 'Cero Fricción de Contraseñas'
  },
  aboutFeature1Body: {
    en: 'Users sign in with just their email. No passwords to remember, reset, or compromise.',
    es: 'Los usuarios inician sesión solo con su correo. Sin contraseñas que recordar, restablecer o comprometer.'
  },
  aboutFeature2Title: {
    en: 'Enterprise-Grade Security',
    es: 'Seguridad de Nivel Empresarial'
  },
  aboutFeature2Body: {
    en: 'Magic links are time-limited, single-use tokens. Built on Supabase Auth with proven security standards.',
    es: 'Los enlaces mágicos son tokens de un solo uso con límite de tiempo. Construidos sobre Supabase Auth con estándares de seguridad probados.'
  },
  aboutFeature3Title: {
    en: 'Instant Implementation',
    es: 'Implementación Instantánea'
  },
  aboutFeature3Body: {
    en: 'Drop-in authentication with minimal code. Focus on building features, not auth infrastructure.',
    es: 'Autenticación lista para usar con código mínimo. Enfócate en construir funcionalidades, no infraestructura de auth.'
  },
  aboutFeature4Title: {
    en: 'Better User Experience',
    es: 'Mejor Experiencia de Usuario'
  },
  aboutFeature4Body: {
    en: 'Reduce signup friction by 80%. No password requirements, no forgotten credentials, no reset flows.',
    es: 'Reduce la fricción de registro en un 80%. Sin requisitos de contraseña, sin credenciales olvidadas, sin flujos de restablecimiento.'
  },
  aboutHowItWorksTitle: {
    en: 'How It Works',
    es: 'Cómo Funciona'
  },
  aboutHowItWorksBody: {
    en: 'Enter your email, receive a secure link, click to authenticate. Supabase handles token generation, validation, and session management automatically.',
    es: 'Ingresa tu correo, recibe un enlace seguro, haz clic para autenticarte. Supabase maneja la generación de tokens, validación y gestión de sesiones automáticamente.'
  },
  aboutTechStackTitle: {
    en: 'Technical Foundation',
    es: 'Fundamento Técnico'
  },
  aboutTechStackBody: {
    en: 'Built on Next.js with server-side session refresh, RLS-first database security, and production-ready patterns.',
    es: 'Construido sobre Next.js con refresco de sesión del lado del servidor, seguridad de base de datos primero con RLS y patrones listos para producción.'
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
