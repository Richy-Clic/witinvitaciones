import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { siteConfig } from '../../data/siteConfig'
import { WhatsAppButton } from '../ui/WhatsAppButton'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionVStack = motion(VStack)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HeroSection() {
  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      minH={{ base: '100svh', md: '100vh' }}
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80"
        alt="Invitación digital elegante para boda"
        position="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center"
        loading="eager"
      />

      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, blackAlpha.700, blackAlpha.500, blackAlpha.700)"
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 32, md: 24 }}>
        <SimpleGridLayout>
          <MotionVStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            spacing={{ base: 6, md: 8 }}
            maxW={{ lg: '2xl' }}
            initial="hidden"
            animate="visible"
          >
            <MotionBox
              custom={0}
              variants={fadeUp}
              px={4}
              py={1.5}
              borderRadius="full"
              bg="whiteAlpha.150"
              backdropFilter="blur(8px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                color="gold.200"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Invitaciones digitales premium
              </Text>
            </MotionBox>

            <MotionHeading
              custom={1}
              variants={fadeUp}
              as="h1"
              size={{ base: '2xl', sm: '3xl', md: '4xl' }}
              color="white"
              lineHeight="1.15"
              fontFamily="heading"
            >
              {siteConfig.tagline}
            </MotionHeading>

            <MotionText
              custom={2}
              variants={fadeUp}
              fontSize={{ base: 'md', md: 'xl' }}
              color="whiteAlpha.900"
              lineHeight="1.7"
              maxW="xl"
            >
              {siteConfig.description}
            </MotionText>

            <MotionBox custom={3} variants={fadeUp} w={{ base: 'full', sm: 'auto' }}>
              <HStack
                spacing={4}
                flexDir={{ base: 'column', sm: 'row' }}
                w={{ base: 'full', sm: 'auto' }}
              >
                <WhatsAppButton
                  size="lg"
                  label="Solicitar información"
                  w={{ base: 'full', sm: 'auto' }}
                />
                <Button
                  as="a"
                  href="#disenos"
                  variant="outline"
                  size="lg"
                  w={{ base: 'full', sm: 'auto' }}
                  borderColor="whiteAlpha.500"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                  rightIcon={<FiArrowDown />}
                >
                  Ver diseños
                </Button>
              </HStack>
            </MotionBox>
          </MotionVStack>

          <MotionBox
            display={{ base: 'none', lg: 'block' }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              border="3px solid"
              borderColor="whiteAlpha.300"
            >
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=700&fit=crop&q=80"
                alt="Vista previa de invitación digital"
                w="320px"
                h="auto"
              />
            </Box>
          </MotionBox>
        </SimpleGridLayout>
      </Container>

      <MotionBox
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Box
          as="a"
          href="#beneficios"
          color="whiteAlpha.700"
          aria-label="Desplazarse hacia abajo"
        >
          <FiArrowDown size={24} />
        </Box>
      </MotionBox>
    </Box>
  )
}

function SimpleGridLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: '1fr', lg: '1fr auto' }}
      gap={{ base: 8, lg: 16 }}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}
