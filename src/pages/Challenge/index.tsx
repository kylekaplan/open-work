import {
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Divider,
  HStack,
  useStyleConfig,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
import './challenge.css';
import TimeLeft from '../../molecules/TimeLeft';
import Uploader from './Uploader';
import BorderedBox from '../../atoms/BorderedBox';
import Footer from '../../organsims/Footer';
import NFTViewer from './NFTViewer.tsx';
import ConnectWalletButton from '../../atoms/ConnectWalletButton';
import Description from './Accordions/Description';
import ExampleImages from './Accordions/ExampleImages';


const MyDivider = () => (
  <Box height={30} />
);

const data = {
  title: 'Ultra Create an original Ultra Sound Money meme. Money',
  postedBy: 'kylekaplan.eth',
  startDate: 'January 7th, 2022',
  endDate: 'January 14th, 2022',
  prizeAmount: '0.01 ETH',
};

const Challenge = () => {
  const variant = useBreakpointValue({ base: 'outline', md: 'solid' });
  console.log('variant', variant);
  const endDate = new Date('Febuary 20, 2022 12:00:00');
  return (
    <Box m="0 auto" padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }} maxWidth="1600px">
      <Flex>
        {/* NFT Viewer on large screens */}
        <Box display={{ base: 'none', md: 'block' }}>
          <NFTViewer
            title={data.title}
            postedBy={data.postedBy}
            startDate={data.startDate}
            endDate={data.endDate}
            prizeAmount={data.prizeAmount}
          />
        </Box>
        <Box ml={{ base: 0, md: 30 }}>
          <VStack align="start" spacing={5}>
            <Heading
              fontSize="4xl"
              fontWeight="bold"
              fontFamily="'Work Sans', sans-serif;"
            >
              Create an original Ultra Sound Money meme.
            </Heading>
            {/* NFT Viewer on small screens */}
            <Box width="100%" display={{ base: 'block', md: 'none' }}>
              <NFTViewer
                title={data.title}
                postedBy={data.postedBy}
                startDate={data.startDate}
                endDate={data.endDate}
                prizeAmount={data.prizeAmount}
              />
            </Box>
            <Text
              fontSize="md"
              fontFamily="'Poppins', sans-serif"
            >
              By: <Text as="span" sx={useStyleConfig('Text', { variant: 'teal' })}>kylekaplan.eth</Text>
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
                <Text>0.01</Text>
              </HStack>
              <ConnectWalletButton />
            </Box>
          </BorderedBox>
        </Box>
      </Flex>
      <MyDivider />
      <Description />
      <MyDivider />
      <ExampleImages />
      <Box height={{ base: 10, md: 30, lg: 75 }} />
      <Uploader />
      <Footer />
    </Box>
  );
}

export default Challenge;
