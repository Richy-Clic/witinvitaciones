import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { siteConfig } from '../../data/siteConfig'

const socialIcons = [
  { icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: FaFacebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: FaTiktok, href: siteConfig.social.tiktok, label: 'TikTok' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" bg="brand.900" color="whiteAlpha.800" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <HStack spacing={2}>
              <Box
                w={10}
                h={10}
                borderRadius="lg"
                bg="brand.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gold.300" fontWeight="700" fontFamily="heading" fontSize="xl">
                  W
                </Text>
              </Box>
              <Text fontFamily="heading" fontWeight="700" fontSize="xl" color="white">
                {siteConfig.name}
              </Text>
            </HStack>
            <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }} maxW="xs" lineHeight="1.7">
              Invitaciones digitales elegantes para los momentos más especiales de tu vida.
            </Text>
          </VStack>

          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
            <Text fontWeight="600" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Enlaces rápidos
            </Text>
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                _hover={{ color: 'gold.300', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Text fontWeight="600" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Síguenos
            </Text>
            <HStack spacing={3}>
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <IconButton
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  icon={<Icon />}
                  variant="ghost"
                  color="whiteAlpha.700"
                  _hover={{ color: 'gold.300', bg: 'whiteAlpha.100' }}
                  borderRadius="full"
                />
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.200" mb={6} />

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="whiteAlpha.600">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </Text>
          <HStack spacing={6} fontSize="sm">
            <Link href="#" _hover={{ color: 'gold.300' }}>
              Privacidad
            </Link>
            <Link href="#" _hover={{ color: 'gold.300' }}>
              Términos
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
