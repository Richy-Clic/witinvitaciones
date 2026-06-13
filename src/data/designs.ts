export interface Design {
  id: string
  name: string
  category: string
  image: string
  demoUrl: string
}

export const designs: Design[] = [
  {
    id: 'elegance',
    name: 'Elegance',
    category: 'Boda',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&q=80',
    demoUrl: '#',
  },
  {
    id: 'celebration',
    name: 'Celebration',
    category: 'Cumpleaños',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop&q=80',
    demoUrl: '#',
  },
  {
    id: 'minimal-chic',
    name: 'Minimal Chic',
    category: 'Evento especial',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=700&fit=crop&q=80',
    demoUrl: '#',
  },
]
