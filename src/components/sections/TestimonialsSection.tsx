import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

export function TestimonialsSection() {
  return (
    <Box as="section" id="testimonios" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="Miles de celebraciones han confiado en nosotros para crear el primer gran detalle de su evento."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
