import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { AnimatedSection } from './AnimatedSection'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection>
      <VStack
        spacing={4}
        textAlign={align}
        align={align === 'center' ? 'center' : 'flex-start'}
        maxW={align === 'center' ? '2xl' : 'xl'}
        mx={align === 'center' ? 'auto' : 0}
        mb={{ base: 10, md: 14 }}
      >
        {eyebrow && (
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="wider"
            textTransform="uppercase"
            color={light ? 'gold.300' : 'gold.600'}
          >
            {eyebrow}
          </Text>
        )}
        <Heading
          as="h2"
          size={{ base: 'xl', md: '2xl' }}
          color={light ? 'white' : 'brand.900'}
          lineHeight="1.2"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={light ? 'whiteAlpha.800' : 'brand.600'}
            lineHeight="1.7"
          >
            {subtitle}
          </Text>
        )}
        <Box
          w="60px"
          h="3px"
          bg={light ? 'gold.400' : 'gold.500'}
          borderRadius="full"
          mt={2}
        />
      </VStack>
    </AnimatedSection>
  )
}
