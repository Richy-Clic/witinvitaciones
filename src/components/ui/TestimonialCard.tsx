import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiStar } from 'react-icons/fi'
import { AnimatedSection } from './AnimatedSection'
import type { Testimonial } from '../../data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <VStack
        align="flex-start"
        spacing={6}
        p={{ base: 6, md: 8 }}
        bg="white"
        borderRadius="2xl"
        boxShadow="sm"
        border="1px solid"
        borderColor="brand.100"
        h="full"
        position="relative"
        _before={{
          content: '"\\201C"',
          position: 'absolute',
          top: 4,
          right: 6,
          fontSize: '5xl',
          fontFamily: 'heading',
          color: 'gold.200',
          lineHeight: 1,
        }}
      >
        <HStack spacing={1} aria-label={`${testimonial.rating} de 5 estrellas`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Icon key={i} as={FiStar} color="gold.500" fill="gold.500" boxSize={4} />
          ))}
        </HStack>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="brand.700"
          lineHeight="1.8"
          fontStyle="italic"
          fontFamily="heading"
        >
          {testimonial.quote}
        </Text>
        <Box pt={2} borderTop="1px solid" borderColor="brand.100" w="full">
          <Text fontWeight="600" color="brand.900">
            {testimonial.name}
          </Text>
          <Text fontSize="sm" color="brand.500">
            {testimonial.event}
          </Text>
        </Box>
      </VStack>
    </AnimatedSection>
  )
}
