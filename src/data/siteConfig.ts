export const siteConfig = {
  name: 'Witinvitaciones',
  tagline: 'Invitaciones digitales que enamoran a tus invitados',
  description:
    'Diseños elegantes, confirmación de asistencia y toda la información de tu evento en un solo lugar.',
  whatsapp: {
    phone: '5215512345678',
    defaultMessage:
      'Hola, me interesa crear una invitación digital con Witinvitaciones. ¿Me pueden dar más información?',
  },
  email: 'hola@witinvitaciones.com',
  social: {
    instagram: 'https://instagram.com/witinvitaciones',
    facebook: 'https://facebook.com/witinvitaciones',
    tiktok: 'https://tiktok.com/@witinvitaciones',
  },
  navLinks: [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Diseños', href: '#disenos' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footerLinks: [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Diseños', href: '#disenos' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage)
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${text}`
}
