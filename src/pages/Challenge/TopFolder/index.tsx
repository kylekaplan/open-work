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
  discription: string;
}
const TopFold = ({
  id,
  title,
  postedBy,
  startDate,
  endDate,
  prizeAmount,
  isWinnerSelected,
  discription,
}: TopFoldProps) => {
  // const endDate = new Date('Febuary 20, 2022 12:00:00');
  return (
    <>
      <h2>
        Wanted: {title}
      </h2>
      <Text
        fontSize="md"
        fontFamily="'Poppins', sans-serif"
      >
        By: <Text as="span" sx={useStyleConfig('Text', { variant: 'teal' })}>{postedBy}</Text>
      </Text>
      <p>
        {discription}
      </p>

      <Text fontSize={16}>
        Challenge ends {endDate.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'EST' })} EST.
      </Text>
      <TimeLeft date={endDate.getTime()} />

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
    </>
          
  );
};

export default TopFold;
