import {
  Box,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Uploader from 'rsuite/Uploader';
import 'rsuite/dist/rsuite.min.css';
import './challenge.css';
import img1 from '../../assets/images/ultra-sound-money/1.jpeg'
import img2 from '../../assets/images/ultra-sound-money/2.jpeg'
import img1Thumbnail from '../../assets/images/ultra-sound-money/1thumbnail.jpeg';
import img2Thumbnail from '../../assets/images/ultra-sound-money/2thumbnail.jpeg';
import ImageExamples from './ImageExamples';
import TimeLeft from '../../molecules/TimeLeft';

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

const Challenge = () => {
  return (
    <Box m="0 10%">
      <Box height={30} />
      <VStack align="start" spacing="0px">
        <Heading fontSize="4xl" fontWeight="bold">
          Create an original Ultra Sound Money meme.
        </Heading>
        <Text>
          By: kylekaplan.eth
        </Text>
      </VStack>
      <Text marginTop="30px" fontSize="2xl">
        The meme must be in favor of the Ultra Sound Money idea and ideally funny and/or educational.
      </Text>
      <VStack marginTop="30px" fontSize="lg" spacing="5px" align="start">
        <Text>
          <b>Prize:</b> 0.01 ETH
        </Text>
        <Text>
          <b>Format:</b> JPEG, PNG, or GIF
        </Text>
        <Text>
          <b>Start date:</b> January 7th, 2022 UTC
        </Text>
        <Text>
          <b>Time Left:</b>
          <TimeLeft date={Date.now() + 100000000} />
        </Text>
        <Text>
          <b>Examples of existing memes:</b>
        </Text>
        <ImageExamples imgs={imgs} />
      </VStack>
      <Uploader className="rs-theme-dark" action="//jsonplaceholder.typicode.com/posts/" draggable>
        <div style={{ lineHeight: '200px' }}>Click or Drag files to this area to upload</div>
      </Uploader>
    </Box>
  );
}

export default Challenge;
