import { Box, Circle, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { AnimatedSection } from './AnimatedSection'
import type { Step } from '../../data/steps'

interface StepCardProps {
  step: Step
  index: number
}

export function StepCard({ step, index }: StepCardProps) {
  const IconComponent = step.icon

  return (
    <AnimatedSection delay={index * 0.15}>
      <VStack spacing={6} textAlign="center" position="relative">
        <Circle
          size="72px"
          bg="brand.700"
          color="white"
          fontSize="2xl"
          fontWeight="700"
          fontFamily="heading"
          boxShadow="lg"
        >
          {step.number}
        </Circle>
        <Box
          p={4}
          borderRadius="xl"
          bg="gold.50"
          color="gold.700"
        >
          <Icon as={IconComponent} boxSize={7} aria-hidden />
        </Box>
        <VStack spacing={3}>
          <Heading as="h3" size="md" color="brand.900">
            {step.title}
          </Heading>
          <Text color="brand.600" lineHeight="1.7" maxW="xs">
            {step.description}
          </Text>
        </VStack>
      </VStack>
    </AnimatedSection>
  )
}
