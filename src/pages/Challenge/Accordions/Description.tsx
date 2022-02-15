import { Text } from '@chakra-ui/react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import AccordionDataDisplay from '../../../molecules/AccordionDataDisplay';

const Description = () => (
  <AccordionDataDisplay
      title="Description"
      icon={<AiOutlineAlignLeft />}
    >
      <Text fontSize="lg">
        The meme must be in favor of the Ultra Sound Money idea and ideally funny and/or educational. I plan on using the meme in an educational series that teaches crypto through memes.
      </Text>
  </AccordionDataDisplay>
)

export default Description;
