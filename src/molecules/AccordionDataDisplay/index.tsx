import { Box, HStack, Text, useStyleConfig } from '@chakra-ui/react';
import {
  BorderedAccordion,
  BorderedAccordionButton,
  BorderedAccordionItem,
  BorderedAccordionPanel,
  BorderedAccordionIcon,
} from '../../atoms/BorderedAccordion';

interface AccordionDataDisplayProps {
  title: string;
  icon?: JSX.Element;
  children: React.ReactNode;
}
const AccordionDataDisplay = ({
  title,
  icon,
  children,
}: AccordionDataDisplayProps) => (
  <BorderedAccordion width="100%" defaultIndex={[0]} allowMultiple>
    <BorderedAccordionItem>
      <h2>
        <BorderedAccordionButton>
          <Box
            flex='1'
            fontSize="lg"
            fontFamily="'Poppins', sans-serif"
          >
            <HStack spacing={2}>
              {icon}
              <Text>{title}</Text>
            </HStack>
          </Box>
          <BorderedAccordionIcon />
        </BorderedAccordionButton>
      </h2>
      <BorderedAccordionPanel
        pb={4}
        sx={useStyleConfig('Background')}
      >
        {children}
      </BorderedAccordionPanel>
    </BorderedAccordionItem>
  </BorderedAccordion>
)

export default AccordionDataDisplay;
