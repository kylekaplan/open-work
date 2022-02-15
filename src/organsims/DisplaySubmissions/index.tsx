import {
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import AccordionDataDisplay from "../../molecules/AccordionDataDisplay";
import Card from "./Card"

const submissions = [
  {
    id: 1,
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg',
    imageAlt: 'hi',
    date: '2 days ago',
    by: 'vitalik.eth',
  },
  {
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg',
    imageAlt: 'hi',
    date: '2 days ago',
    by: 'vitalik.eth',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg',
    imageAlt: 'hi',
    date: '2 days ago',
    by: 'vitalik.eth',
  },
  {
    id: 4,
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg',
    imageAlt: 'hi',
    date: '2 days ago',
    by: 'vitalik.eth',
  },
];


const DisplaySubmissions = () => {
  return (
    <Box>
      <AccordionDataDisplay title="Open Source Memes:">
        <Wrap spacing={5} mt={3} mb={3}>
          {submissions.map(submission => (
            <WrapItem
              w={{
                base: "100%",
                md: "Calc(50% - 20px)", // 50% of space minus the 5px of spacing
                lg: "Calc(33% - 20px)", // 33% of space minus the 5px of spacing
                xl: "Calc(25% - 20px)", // 25% of space minus the 5px of spacing
              }}
            >
              <Card
                key={submission.id}
                imageUrl={submission.imageUrl}
                imageAlt={submission.imageAlt}
                date={submission.date}
                by={submission.by}
              />
            </WrapItem>
          ))}
        </Wrap>
      </AccordionDataDisplay>
    </Box>
  );
};

export default DisplaySubmissions;
