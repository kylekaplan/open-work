import { FaClipboardCheck } from 'react-icons/fa';
import AccordionDataDisplay from "../../../molecules/AccordionDataDisplay";
import ImageExamples from '../ImageExamples';
import img1 from '../../../assets/images/ultra-sound-money/1.jpeg'
import img2 from '../../../assets/images/ultra-sound-money/2.jpeg'
import img1Thumbnail from '../../../assets/images/ultra-sound-money/1thumbnail.jpeg';
import img2Thumbnail from '../../../assets/images/ultra-sound-money/2thumbnail.jpeg';

// const imgs = [
//   {
//     thumbnail: img1Thumbnail,
//     image: img1,
//     imgWidth: 508,
//     imgHeight: 491,
//   },
//   {
//     thumbnail: img2Thumbnail,
//     image: img2,
//     imgWidth: 2702,
//     imgHeight: 1514,
//   },
// ];

interface ImageExamplesProps {
  imgs: {
    image: string;
    thumbnail: string;
    imgWidth: number;
    imgHeight: number;
  }[]
}
const ExampleImages = ({
  imgs,
}: ImageExamplesProps) => {
  return (
    <AccordionDataDisplay
      title="Example Images"
      icon={<FaClipboardCheck />}
    >
      <ImageExamples imgs={imgs} />
    </AccordionDataDisplay>
  );
};

export default ExampleImages;