import { Box, Container } from '@chakra-ui/react'
import { designs } from '../../data/designs'
import { DesignCard } from '../ui/DesignCard'
import { SectionHeading } from '../ui/SectionHeading'

export function DesignsSection() {
  return (
    <Box as="section" id="disenos" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestros diseños"
          subtitle="Plantillas exclusivas para bodas, XV años, cumpleaños y eventos especiales. Cada diseño es completamente personalizable."
        />
        <Box
          sx={{
            columnCount: { base: 1, sm: 2, lg: 3 },
            columnGap: { base: '24px', md: '32px' },
            '& > *': {
              breakInside: 'avoid',
              mb: { base: 6, md: 8 },
            },
          }}
        >
          {designs.map((design, index) => (
            <DesignCard key={design.id} design={design} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
