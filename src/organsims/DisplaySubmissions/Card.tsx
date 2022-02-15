import {
  Box,
  Image,
} from "@chakra-ui/react";

const property = {
  imageUrl: 'https://picsum.photos/200',
  imageAlt: 'hi',
  date: '2 days ago',
  by: '0x058092380943284938402394849038420',
}

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  date: string;
  by: string;
}
const Card = ({
  imageUrl,
  imageAlt,
  date,
  by,
}: CardProps) => {
  return (
    <Box maxW='2xl' borderWidth='1px' borderRadius='lg' overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
          >
            {date}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          By: {by}
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