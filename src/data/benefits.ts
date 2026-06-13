import { IconType } from 'react-icons'
import { FiCheckCircle, FiEdit3, FiShare2, FiUsers } from 'react-icons/fi'

export interface Benefit {
  id: string
  title: string
  description: string
  icon: IconType
}

export const benefits: Benefit[] = [
  {
    id: 'rsvp',
    title: 'Confirmación de asistencia en tiempo real',
    description:
      'Recibe y gestiona las confirmaciones de tus invitados al instante, sin hojas de cálculo ni mensajes perdidos.',
    icon: FiCheckCircle,
  },
  {
    id: 'designs',
    title: 'Diseños personalizados',
    description:
      'Elige entre plantillas elegantes y personaliza colores, textos, fotos y detalles para reflejar la esencia de tu evento.',
    icon: FiEdit3,
  },
  {
    id: 'whatsapp',
    title: 'Compartir por WhatsApp',
    description:
      'Envía tu invitación con un solo toque. Tus invitados la reciben al instante en su celular.',
    icon: FiShare2,
  },
  {
    id: 'guests',
    title: 'Gestión sencilla de invitados',
    description:
      'Organiza tu lista de invitados, controla acompañantes y mantén todo bajo control desde un solo panel.',
    icon: FiUsers,
  },
]
