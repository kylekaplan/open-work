import {
  Box,
  Text,
  Heading,
  VStack,
  Flex,
  Button,
  Divider,
  HStack,
  useStyleConfig,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaEthereum, FaClipboardCheck } from 'react-icons/fa';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import './challenge.css';
import img1 from '../../assets/images/ultra-sound-money/1.jpeg'
import img2 from '../../assets/images/ultra-sound-money/2.jpeg'
import img1Thumbnail from '../../assets/images/ultra-sound-money/1thumbnail.jpeg';
import img2Thumbnail from '../../assets/images/ultra-sound-money/2thumbnail.jpeg';
import ImageExamples from './ImageExamples';
import TimeLeft from '../../molecules/TimeLeft';
import Uploader from './Uploader';
import BorderedBox from '../../atoms/BorderedBox';
import {
  BorderedAccordion,
  BorderedAccordionItem,
  BorderedAccordionButton,
  BorderedAccordionIcon,
  BorderedAccordionPanel,
} from '../../atoms/BorderedAccordion';
import Footer from '../../organsims/Footer';
import NFTViewer from './NFTViewer.tsx';
import ConnectWalletButton from '../../atoms/ConnectWalletButton';

const imgs = [
  {
    thumbnail: img1Thumbnail,
    image: img1,
    imgWidth: 508,
    imgHeight: 491,
  },
  {
    thumbnail: img2Thumbnail,
    image: img2,
    imgWidth: 2702,
    imgHeight: 1514,
  },
];

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
      <Box height={30} />
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
                  <AiOutlineAlignLeft />
                  <Text>Description</Text>
                </HStack>
              </Box>
              <BorderedAccordionIcon />
            </BorderedAccordionButton>
          </h2>
          <BorderedAccordionPanel
            pb={4}
            sx={useStyleConfig('Background')}
          >
            <Text fontSize="lg">
              The meme must be in favor of the Ultra Sound Money idea and ideally funny and/or educational. I plan on using the meme in an educational series that teaches crypto through memes.
            </Text>
          </BorderedAccordionPanel>
        </BorderedAccordionItem>
      </BorderedAccordion>

      <Box height={30} />

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
                  <FaClipboardCheck />
                  <Text>Examples</Text>
                </HStack>
              </Box>
              <BorderedAccordionIcon />
            </BorderedAccordionButton>
            </h2>
            <BorderedAccordionPanel
              pb={4}
              sx={useStyleConfig('Background')}
              overflow="scroll"
            >
              <ImageExamples imgs={imgs} />
            </BorderedAccordionPanel>
          </BorderedAccordionItem>
      </BorderedAccordion>
      <Box height={{ base: 10, md: 30, lg: 75 }} />
      <Uploader />
      <Footer />
    </Box>
  );
}

export default Challenge;
