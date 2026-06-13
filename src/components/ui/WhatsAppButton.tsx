import { Button, type ButtonProps } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '../../data/siteConfig'

interface WhatsAppButtonProps extends ButtonProps {
  message?: string
  label?: string
}

export function WhatsAppButton({
  message,
  label = 'Contactar por WhatsApp',
  size = 'lg',
  ...props
}: WhatsAppButtonProps) {
  return (
    <Button
      as="a"
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      size={size}
      leftIcon={<FaWhatsapp size={20} />}
      aria-label={label}
      {...props}
    >
      {label}
    </Button>
  )
}
