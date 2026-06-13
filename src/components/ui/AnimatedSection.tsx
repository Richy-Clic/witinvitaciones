import { Box, type BoxProps } from '@chakra-ui/react'
import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function withDelay(variants: Variants, delay: number): Variants {
  if (delay === 0) return variants

  const visible = variants.visible
  if (typeof visible === 'object' && visible !== null) {
    return {
      ...variants,
      visible: {
        ...visible,
        transition: {
          ...(typeof visible.transition === 'object' ? visible.transition : {}),
          delay,
        },
      },
    }
  }
  return variants
}

interface AnimatedSectionProps extends BoxProps {
  delay?: number
  variants?: Variants
}

export function AnimatedSection({
  children,
  delay = 0,
  variants = defaultVariants,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={withDelay(variants, delay)}
      {...props}
    >
      {children}
    </Box>
  )
}
