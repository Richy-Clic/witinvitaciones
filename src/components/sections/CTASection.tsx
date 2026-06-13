import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WhatsAppButton } from '../ui/WhatsAppButton'

const MotionBox = motion(Box)

export function CTASection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="brand.800"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at 30% 50%, brand.700, brand.900)"
        aria-hidden
      />
      <Box
        position="absolute"
        top="50%"
        right="-5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="gold.500"
        opacity={0.08}
        filter="blur(60px)"
        aria-hidden
      />

      <Container maxW="3xl" position="relative">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={8} textAlign="center">
            <VStack spacing={4}>
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="wider"
                textTransform="uppercase"
                color="gold.300"
              >
                ¿Listo para empezar?
              </Text>
              <Box
                as="h2"
                fontFamily="heading"
                fontWeight="700"
                fontSize={{ base: '2xl', md: '4xl' }}
                color="white"
                lineHeight="1.2"
              >
                Comienza a crear tu invitación hoy
              </Box>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" maxW="lg" lineHeight="1.7">
                Cuéntanos sobre tu evento y te ayudaremos a elegir el diseño perfecto.
                Sin compromiso, respuesta rápida por WhatsApp.
              </Text>
            </VStack>
            <WhatsAppButton size="lg" px={10} py={7} fontSize="lg" />
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
