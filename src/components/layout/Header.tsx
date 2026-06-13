import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { siteConfig } from '../../data/siteConfig'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      bg={scrolled ? 'whiteAlpha.900' : 'transparent'}
      backdropFilter={scrolled ? 'blur(12px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="brand.100"
      transition="all 0.3s ease"
      py={scrolled ? 3 : 5}
    >
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            aria-label={`${siteConfig.name} — Inicio`}
          >
            <HStack spacing={2}>
              <Box
                w={9}
                h={9}
                borderRadius="lg"
                bg="brand.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gold.300" fontWeight="700" fontFamily="heading" fontSize="lg">
                  W
                </Text>
              </Box>
              <Text
                fontFamily="heading"
                fontWeight="700"
                fontSize={{ base: 'lg', md: 'xl' }}
                color={scrolled ? 'brand.900' : 'white'}
                transition="color 0.3s"
              >
                {siteConfig.name}
              </Text>
            </HStack>
          </Link>

          <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="500"
                color={scrolled ? 'brand.700' : 'whiteAlpha.900'}
                _hover={{ color: scrolled ? 'gold.600' : 'gold.200', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton size="md" label="Solicitar información" />
          </HStack>

          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            aria-label="Abrir menú de navegación"
            icon={<FiMenu />}
            variant="ghost"
            color={scrolled ? 'brand.800' : 'white'}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily="heading">{siteConfig.name}</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontSize="lg"
                  fontWeight="500"
                  color="brand.700"
                  py={2}
                  onClick={onClose}
                  _hover={{ color: 'gold.600', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
              <WhatsAppButton
                w="full"
                label="Solicitar información"
                onClick={onClose}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
