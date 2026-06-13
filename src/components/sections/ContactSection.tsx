import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { buildWhatsAppUrl, siteConfig } from '../../data/siteConfig'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const eventTypes = ['Boda', 'XV Años', 'Cumpleaños', 'Baby Shower', 'Aniversario', 'Otro']

const socialLinks = [
  { icon: FaWhatsapp, href: buildWhatsAppUrl(), label: 'WhatsApp', color: '#25D366' },
  { icon: FiMail, href: `mailto:${siteConfig.email}`, label: 'Correo', color: 'brand.600' },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram', color: '#E4405F' },
  { icon: FaFacebook, href: siteConfig.social.facebook, label: 'Facebook', color: '#1877F2' },
  { icon: FaTiktok, href: siteConfig.social.tiktok, label: 'TikTok', color: 'brand.900' },
]

export function ContactSection() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const phone = data.get('phone') as string
    const eventType = data.get('eventType') as string
    const message = data.get('message') as string

    const whatsappMessage = [
      `Hola, soy ${name}.`,
      `Teléfono: ${phone}`,
      `Tipo de evento: ${eventType}`,
      message ? `Mensaje: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(whatsappMessage), '_blank', 'noopener,noreferrer')

    toast({
      title: 'Redirigiendo a WhatsApp',
      description: 'Completa el envío del mensaje en WhatsApp.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })

    form.reset()
    setIsSubmitting(false)
  }

  return (
    <Box as="section" id="contacto" py={{ base: 16, md: 24 }} bg="cream.100">
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu evento"
          subtitle="Completa el formulario o contáctanos directamente. Estamos aquí para ayudarte."
        />

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }}>
          <AnimatedSection>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="brand.100"
            >
              <VStack spacing={5} align="stretch">
                <FormControl isRequired>
                  <FormLabel color="brand.700">Nombre</FormLabel>
                  <Input
                    name="name"
                    placeholder="Tu nombre completo"
                    bg="cream.50"
                    border="1px solid"
                    borderColor="brand.200"
                    _focus={{ borderColor: 'gold.500', boxShadow: '0 0 0 1px var(--chakra-colors-gold-500)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="brand.700">Teléfono</FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+52 55 1234 5678"
                    bg="cream.50"
                    border="1px solid"
                    borderColor="brand.200"
                    _focus={{ borderColor: 'gold.500', boxShadow: '0 0 0 1px var(--chakra-colors-gold-500)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="brand.700">Tipo de evento</FormLabel>
                  <Select
                    name="eventType"
                    placeholder="Selecciona tu evento"
                    bg="cream.50"
                    border="1px solid"
                    borderColor="brand.200"
                    _focus={{ borderColor: 'gold.500', boxShadow: '0 0 0 1px var(--chakra-colors-gold-500)' }}
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel color="brand.700">Mensaje</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu evento, fecha estimada, número de invitados..."
                    rows={4}
                    bg="cream.50"
                    border="1px solid"
                    borderColor="brand.200"
                    _focus={{ borderColor: 'gold.500', boxShadow: '0 0 0 1px var(--chakra-colors-gold-500)' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  loadingText="Enviando..."
                  leftIcon={<FaWhatsapp />}
                >
                  Enviar por WhatsApp
                </Button>
              </VStack>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <VStack align="flex-start" spacing={8} h="full" justify="center">
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight="600" color="brand.900">
                  Otros medios de contacto
                </Text>
                <HStack spacing={3}>
                  <Icon as={FaWhatsapp} color="#25D366" boxSize={5} />
                  <Text color="brand.600">
                    <Box as="a" href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" _hover={{ color: 'gold.600' }}>
                      WhatsApp directo
                    </Box>
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FiMail} color="brand.600" boxSize={5} />
                  <Text color="brand.600">
                    <Box as="a" href={`mailto:${siteConfig.email}`} _hover={{ color: 'gold.600' }}>
                      {siteConfig.email}
                    </Box>
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FiPhone} color="brand.600" boxSize={5} />
                  <Text color="brand.600">Respuesta en menos de 24 horas</Text>
                </HStack>
              </VStack>

              <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight="600" color="brand.900">
                  Redes sociales
                </Text>
                <HStack spacing={3} flexWrap="wrap">
                  {socialLinks.map(({ icon: SocialIcon, href, label, color }) => (
                    <IconButton
                      key={label}
                      as="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      icon={<SocialIcon />}
                      variant="outline"
                      borderColor="brand.200"
                      color={color}
                      borderRadius="full"
                      size="lg"
                      _hover={{ bg: 'brand.50', transform: 'translateY(-2px)' }}
                    />
                  ))}
                </HStack>
              </VStack>

              <Box
                p={6}
                borderRadius="xl"
                bg="brand.50"
                border="1px solid"
                borderColor="brand.100"
                w="full"
              >
                <Text fontFamily="heading" fontSize="lg" color="brand.800" mb={2}>
                  ¿Primera vez creando una invitación digital?
                </Text>
                <Text fontSize="sm" color="brand.600" lineHeight="1.7">
                  No te preocupes, te guiamos paso a paso. Desde la elección del diseño
                  hasta compartir tu invitación con todos tus invitados.
                </Text>
              </Box>
            </VStack>
          </AnimatedSection>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
