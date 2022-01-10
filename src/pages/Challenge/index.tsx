import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import { Gallery, Item } from 'react-photoswipe-gallery';
import './challenge.css';
import img1 from '../../assets/images/ultra-sound-money/1.jpeg'
import img2 from '../../assets/images/ultra-sound-money/2.jpeg'
import img1Thumbnail from '../../assets/images/ultra-sound-money/1thumbnail.jpeg';
import img2Thumbnail from '../../assets/images/ultra-sound-money/2thumbnail.jpeg';

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

const getThumbBoundsFn = (index: number) => {

  // find thumbnail element
  var thumbnail = document.querySelectorAll('.thumbnails')[index];

  // get window scroll Y
  var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
  // optionally get horizontal scroll

  // get position of element relative to viewport
  var rect = thumbnail.getBoundingClientRect(); 

  // w = width
  return {x:rect.left, y:rect.top + pageYScroll - 3, w:rect.width};


  // Good guide on how to get element coordinates:
  // http://javascript.info/tutorial/coordinates
}

const twoDigits = (n: number) => {
  return n > 9 ? "" + n: "0" + n;
}

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
          <Countdown
            date={Date.now() + 100000000}
            renderer={({ days, hours, minutes, seconds }) => (
              <> {twoDigits(days)}:{twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}</>
            )}
          />
        </Text>
        <Text>
          <b>Examples of existing memes:</b>
        </Text>
        <Gallery
          options={{ bgOpacity: 0.8, getThumbBoundsFn: getThumbBoundsFn }}
        >
          <HStack>
            {imgs.map((item) => (
              <Item
                original={item.image}
                thumbnail={item.thumbnail}
                width={item.imgWidth}
                height={item.imgHeight}
                
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    src={item.thumbnail}
                    className="thumbnails"
                    alt=""
                  />
                )}
              </Item>
            ))}
          </HStack>
        </Gallery>
      </VStack>

    </Box>
  );
}

export default Challenge;
