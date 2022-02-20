import {
  Box,
  Image,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactTimeAgo from 'react-time-ago'
import './styles.css';

const property = {
  imageUrl: 'https://picsum.photos/200',
  imageAlt: 'hi',
  date: '2 days ago',
  by: '0x058092380943284938402394849038420',
}

interface CardProps {
  files: { src: string }[];
  imageAlt: string;
  date: Date;
  postedBy: string;
}
const Card = ({
  files,
  imageAlt,
  date,
  postedBy,
}: CardProps) => {
  return (
    <Box maxW='2xl' borderWidth='1px' borderRadius='lg' overflow="hidden">
      {!(files.length > 1) // not greater than 1
        ? <Image src={files[0]?.src} alt={imageAlt} />
        : (
          <Carousel>
            {files.map((file, index) => (
                <div key={file?.src} >
                  <Image src={file.src} />
                </div>
            ))}
          </Carousel>
        )
      }
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
          >
            {/* {date.toUTCString()} */}
            <ReactTimeAgo date={date} locale="en-US"/>
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          By: {postedBy}
        </Box>
        {/* <Box display='flex' mt='2' alignItems='center'>
          <Box color='yellow.400' mr='2'>5 stars</Box>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Card;