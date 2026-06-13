import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { benefits } from '../../data/benefits'
import { BenefitCard } from '../ui/BenefitCard'
import { SectionHeading } from '../ui/SectionHeading'

export function BenefitsSection() {
  return (
    <Box as="section" id="beneficios" py={{ base: 16, md: 24 }} bg="cream.100">
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Beneficios"
          title="Todo lo que necesitas para tu evento"
          subtitle="Simplifica la organización de tu celebración con herramientas diseñadas para impresionar a tus invitados."
        />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }}>
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
