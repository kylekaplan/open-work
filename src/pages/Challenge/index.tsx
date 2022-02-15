import { Box } from '@chakra-ui/react';
import './challenge.css';
import Uploader from './Uploader';
import Footer from '../../organsims/Footer';
import Description from './Accordions/Description';
import ExampleImages from './Accordions/ExampleImages';
import TopFold from './TopFolder';


const MyDivider = () => (
  <Box height={30} />
);

const Challenge = () => {
  return (
    <Box
      m="0 auto"
      padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }}
      maxWidth="1600px"
    >
      <TopFold />
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
