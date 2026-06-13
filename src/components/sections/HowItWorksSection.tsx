import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { steps } from '../../data/steps'
import { SectionHeading } from '../ui/SectionHeading'
import { StepCard } from '../ui/StepCard'

export function HowItWorksSection() {
  return (
    <Box
      as="section"
      id="como-funciona"
      py={{ base: 16, md: 24 }}
      bg="cream.50"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="gold.100"
        opacity={0.4}
        filter="blur(80px)"
        aria-hidden
      />
      <Container maxW="7xl" position="relative">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo funciona"
          subtitle="Crear tu invitación digital es más fácil de lo que imaginas. En solo tres pasos estarás listo para compartir."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 12, md: 8 }}>
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
