import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import type { Design } from '../../data/designs'

const MotionBox = motion(Box)

interface DesignCardProps {
  design: Design
  index: number
}

export function DesignCard({ design, index }: DesignCardProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      border="1px solid"
      borderColor="brand.100"
      role="article"
      aria-label={`Diseño ${design.name}`}
      _hover={{
        boxShadow: '2xl',
        '& .design-image': { transform: 'scale(1.05)' },
        '& .design-overlay': { opacity: 1 },
      }}
      sx={{ transition: 'box-shadow 0.35s ease' }}
    >
      <Box position="relative" overflow="hidden">
        <Image
          className="design-image"
          src={design.image}
          alt={`Vista previa del diseño ${design.name}`}
          w="full"
          h="auto"
          objectFit="cover"
          loading="lazy"
          transition="transform 0.5s ease"
        />
        <Box
          className="design-overlay"
          position="absolute"
          inset={0}
          bg="blackAlpha.500"
          opacity={0}
          transition="opacity 0.35s ease"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            as="a"
            href={design.demoUrl}
            variant="gold"
            size="sm"
            rightIcon={<FiExternalLink />}
            aria-label={`Ver demo de ${design.name}`}
          >
            Ver demo
          </Button>
        </Box>
        <Badge
          position="absolute"
          top={3}
          left={3}
          bg="whiteAlpha.900"
          color="brand.700"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="600"
        >
          {design.category}
        </Badge>
      </Box>
      <VStack align="flex-start" p={5} spacing={1}>
        <Heading as="h3" size="md" color="brand.900">
          {design.name}
        </Heading>
        <Text fontSize="sm" color="brand.500">
          Plantilla premium
        </Text>
      </VStack>
    </MotionBox>
  )
}
