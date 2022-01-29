import { Accordion, useStyleConfig } from '@chakra-ui/react'

function BorderedAccordion(props: any) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Border', { variant })

  // Pass the computed styles into the `__css` prop
  return <Accordion __css={styles} {...rest} />
}

export default BorderedAccordion
