import { IconType } from 'react-icons'
import { FiLayers, FiSend, FiSliders } from 'react-icons/fi'

export interface Step {
  id: string
  number: number
  title: string
  description: string
  icon: IconType
}

export const steps: Step[] = [
  {
    id: 'choose',
    number: 1,
    title: 'Elige tu diseño',
    description:
      'Explora nuestra galería de plantillas premium y selecciona el estilo perfecto para tu celebración.',
    icon: FiLayers,
  },
  {
    id: 'customize',
    number: 2,
    title: 'Personaliza tu evento',
    description:
      'Agrega fecha, lugar, itinerario, fotos y todos los detalles que tus invitados necesitan saber.',
    icon: FiSliders,
  },
  {
    id: 'share',
    number: 3,
    title: 'Comparte y recibe confirmaciones',
    description:
      'Envía tu invitación por enlace o WhatsApp y recibe las confirmaciones de asistencia en tiempo real.',
    icon: FiSend,
  },
]
