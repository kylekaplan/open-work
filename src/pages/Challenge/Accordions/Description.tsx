import { Text } from '@chakra-ui/react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import AccordionDataDisplay from '../../../molecules/AccordionDataDisplay';

interface DescriptionProps {
  description: string;
}
const Description = ({
  description,
}: DescriptionProps) => (
  <AccordionDataDisplay
      title="Description"
      icon={<AiOutlineAlignLeft />}
    >
      <Text fontSize="lg">
        {description}
      </Text>
  </AccordionDataDisplay>
)

export default Description;
