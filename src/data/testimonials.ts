export interface Testimonial {
  id: string
  name: string
  event: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    event: 'Boda — Ciudad de México',
    quote:
      'Nuestra invitación digital fue el primer detalle que enamoró a nuestros invitados. El RSVP nos ahorró horas de organización.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Valentina Ruiz',
    event: 'XV Años — Guadalajara',
    quote:
      'El diseño quedó exactamente como lo soñé. Compartirla por WhatsApp fue súper fácil y todas mis amigas quedaron fascinadas.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Carlos & Ana',
    event: 'Aniversario — Monterrey',
    quote:
      'Profesional, elegante y muy fácil de usar. El equipo de Witinvitaciones nos guió en cada paso del proceso.',
    rating: 5,
  },
]
