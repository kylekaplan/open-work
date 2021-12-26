import {
  Box,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';

const Challenge = () => {
  return (
    <Box>
      <Box height={50} />
      <VStack>
        <Heading
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          Ultra Sound Money
        </Heading>
        <Heading>
          Earn 0.01 ETH for the best Ultra Sound Money Meme
        </Heading>
      </VStack>
    </Box>
  );
}

export default Challenge;
