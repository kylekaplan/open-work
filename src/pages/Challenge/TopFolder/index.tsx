import {
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Divider,
  HStack,
  useStyleConfig,
} from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
import BorderedBox from '../../../atoms/BorderedBox';
import ClaimButton from '../../../atoms/ClaimButton';
import ConnectWalletButton from '../../../atoms/ConnectWalletButton';
import TimeLeft from '../../../molecules/TimeLeft';
import NFTViewer from '../NFTViewer.tsx';

// const data = {
//   title: 'Ultra Create an original Ultra Sound Money meme. Money',
//   postedBy: 'kylekaplan.eth',
//   startDate: 'January 7th, 2022',
//   endDate: 'January 14th, 2022',
//   prizeAmount: '0.01 ETH',
// };

interface TopFoldProps {
  id: string;
  title: string;
  postedBy: string;
  startDate: Date;
  endDate: Date;
  prizeAmount: string;
  isWinnerSelected: boolean;
}
const TopFold = ({
  id,
  title,
  postedBy,
  startDate,
  endDate,
  prizeAmount,
  isWinnerSelected,
}: TopFoldProps) => {
  // const endDate = new Date('Febuary 20, 2022 12:00:00');
  return (
    <Flex>
      {/* NFT Viewer on large screens */}
      <Box display={{ base: 'none', md: 'block' }}>
        <NFTViewer
          title={title}
          postedBy={postedBy}
          startDate={startDate}
          endDate={endDate}
          prizeAmount={prizeAmount}
        />
      </Box>
      <Box ml={{ base: 0, md: 30 }}>
        <VStack align="start" spacing={5}>
          <Heading
            fontSize="4xl"
            fontWeight="bold"
            fontFamily="'Work Sans', sans-serif;"
          >
            {title}
          </Heading>
          {/* NFT Viewer on small screens */}
          <Box width="100%" display={{ base: 'block', md: 'none' }}>
            <NFTViewer
              title={title}
              postedBy={postedBy}
              startDate={startDate}
              endDate={endDate}
              prizeAmount={prizeAmount}
            />
          </Box>
          <Text
            fontSize="md"
            fontFamily="'Poppins', sans-serif"
          >
            By: <Text as="span" sx={useStyleConfig('Text', { variant: 'teal' })}>{postedBy}</Text>
          </Text>
        </VStack>
        <BorderedBox
          mt={8}
          fontFamily="'Poppins', sans-serif"
        >
          <Box p="20px">
            <Text fontSize={16}>
              Challenge ends {endDate.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'EST' })} EST.
            </Text>
            <TimeLeft date={endDate.getTime()} />
          </Box>
          <Divider />
          <Box
            p={30}
            sx={useStyleConfig('Background')}
            borderBottomRadius={8}
          >
            <Text>
              Prize:
            </Text>
            <HStack fontSize="30px">
              <FaEthereum />
              <Text>{prizeAmount}</Text>
            </HStack>
            {isWinnerSelected
              ? <ClaimButton bountyId={id} />
              : <ConnectWalletButton />
            }
          </Box>
        </BorderedBox>
      </Box>
    </Flex>
  );
};

export default TopFold;
