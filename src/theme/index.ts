import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: '"Cormorant Garamond", Georgia, serif',
  body: '"Inter", system-ui, sans-serif',
}

const colors = {
  brand: {
    50: '#FAF6F3',
    100: '#F3EBE4',
    200: '#E8D5C8',
    300: '#D4B5A0',
    400: '#B88E78',
    500: '#9A6B5A',
    600: '#7D5548',
    700: '#63443A',
    800: '#4A332C',
    900: '#2E1F1B',
  },
  gold: {
    50: '#FBF7ED',
    100: '#F5EBD0',
    200: '#EBD9A8',
    300: '#DFC47A',
    400: '#D4AF5A',
    500: '#C9A04A',
    600: '#A67F3A',
    700: '#7D5F2C',
    800: '#54401E',
    900: '#2B2010',
  },
  cream: {
    50: '#FDFCFA',
    100: '#FAF8F5',
    200: '#F5F1EB',
    300: '#EDE6DC',
  },
}

const styles = {
  global: {
    'html, body': {
      bg: 'cream.100',
      color: 'brand.900',
      scrollBehavior: 'smooth',
    },
    '::selection': {
      bg: 'gold.200',
      color: 'brand.900',
    },
  },
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'full',
      transition: 'all 0.25s ease',
    },
    variants: {
      solid: {
        bg: 'brand.700',
        color: 'white',
        _hover: {
          bg: 'brand.800',
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'brand.900',
          transform: 'translateY(0)',
        },
      },
      outline: {
        borderColor: 'brand.300',
        color: 'brand.700',
        _hover: {
          bg: 'brand.50',
          borderColor: 'brand.500',
        },
      },
      ghost: {
        color: 'brand.700',
        _hover: {
          bg: 'brand.50',
        },
      },
      gold: {
        bg: 'gold.500',
        color: 'white',
        _hover: {
          bg: 'gold.600',
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
      },
      whatsapp: {
        bg: '#25D366',
        color: 'white',
        _hover: {
          bg: '#1DA851',
          transform: 'translateY(-1px)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: '700',
      letterSpacing: '-0.02em',
    },
  },
}

export const theme = extendTheme({ config, fonts, colors, styles, components })
