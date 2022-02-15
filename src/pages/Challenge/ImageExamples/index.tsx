import {
  HStack,
  Image,
} from '@chakra-ui/react';
import { Gallery, Item } from 'react-photoswipe-gallery';

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

interface ImageExamplesProps {
  imgs: { image: string, thumbnail: string, imgWidth: number, imgHeight: number }[]
}
const ImageExamples = ({ imgs }: ImageExamplesProps) => {
  return (
    <Gallery
      options={{ bgOpacity: 0.8, getThumbBoundsFn: getThumbBoundsFn }}
    >
      <HStack>
        {imgs.map((item) => (
          <Item
            key={item.image}
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
  )
}

export default ImageExamples;
