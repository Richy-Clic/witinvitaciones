# Witinvitaciones

Landing page moderna y enfocada en conversión para **Witinvitaciones** — plataforma de invitaciones digitales para bodas, XV años, cumpleaños y eventos especiales.

## Stack

- React 18 + TypeScript
- Vite
- Chakra UI v2
- Framer Motion
- React Icons

## Estructura de carpetas

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Secciones de la landing (Hero, Benefits, etc.)
│   └── ui/              # Componentes reutilizables (cards, botones, animaciones)
├── data/                # Contenido estático (beneficios, diseños, testimonios, config)
├── pages/               # LandingPage
├── theme/               # Tema Chakra UI personalizado
├── App.tsx
└── main.tsx
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Personalización

Edita `src/data/siteConfig.ts` para actualizar:

- Número de WhatsApp
- Correo electrónico
- Redes sociales
- Enlaces de navegación

## Secciones

1. **Hero** — Imagen principal, CTA principal y secundario
2. **Beneficios** — 4 tarjetas con iconos
3. **Diseños** — Galería masonry responsive
4. **Cómo funciona** — 3 pasos
5. **Testimonios** — Tarjetas de clientes
6. **CTA** — Llamada a WhatsApp
7. **Contacto** — Formulario + medios de contacto
8. **Footer** — Logo, enlaces y redes
