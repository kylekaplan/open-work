import { Box, useStyleConfig } from '@chakra-ui/react'

function BorderedBox(props: any) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Border', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box sx={styles} {...rest} />
}

export default BorderedBox
