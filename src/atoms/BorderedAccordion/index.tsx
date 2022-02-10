import {
  Accordion,
  AccordionItem,
  AccordionButton as BorderedAccordionButton,
  AccordionIcon as BorderedAccordionIcon,
  AccordionPanel as BorderedAccordionPanel,
  useStyleConfig,
} from '@chakra-ui/react'

function BorderedAccordion(props: any) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Border', { variant })
  console.log('styles', styles)

  // Pass the computed styles into the `__css` prop
  return <Accordion __css={styles} {...rest} />
}

function BorderedAccordionItem(props: any) {
  const { variant, ...rest } = props

  return <AccordionItem borderBottom={0} borderTop={0} {...rest} />
}

export {
  BorderedAccordion,
  BorderedAccordionItem,
  BorderedAccordionButton,
  BorderedAccordionIcon,
  BorderedAccordionPanel,
};

export default BorderedAccordion
