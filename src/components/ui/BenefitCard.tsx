import { Box, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { AnimatedSection } from './AnimatedSection'
import type { Benefit } from '../../data/benefits'

interface BenefitCardProps {
  benefit: Benefit
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const IconComponent = benefit.icon

  return (
    <AnimatedSection delay={index * 0.1}>
      <VStack
        align="flex-start"
        spacing={5}
        p={{ base: 6, md: 8 }}
        bg="white"
        borderRadius="2xl"
        boxShadow="sm"
        border="1px solid"
        borderColor="brand.100"
        h="full"
        transition="all 0.3s ease"
        _hover={{
          boxShadow: 'xl',
          transform: 'translateY(-4px)',
          borderColor: 'gold.200',
        }}
      >
        <Box
          p={3}
          borderRadius="xl"
          bg="brand.50"
          color="brand.700"
        >
          <Icon as={IconComponent} boxSize={6} aria-hidden />
        </Box>
        <Heading as="h3" size="md" color="brand.900">
          {benefit.title}
        </Heading>
        <Text color="brand.600" lineHeight="1.7" fontSize="md">
          {benefit.description}
        </Text>
      </VStack>
    </AnimatedSection>
  )
}
