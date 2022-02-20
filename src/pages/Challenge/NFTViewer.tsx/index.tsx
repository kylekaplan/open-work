import { Box, DarkMode, Text } from "@chakra-ui/react";

interface NFTViewerProps {
  title: string;
  postedBy: string;
  startDate: Date;
  endDate: Date;
  prizeAmount: string;
}
const NFTViewer = ({
  title,
  postedBy,
  startDate,
  endDate,
  prizeAmount,
}: NFTViewerProps) => {
  console.log('in NFTViewer prizeAmo  ', prizeAmount);
  return (
    <DarkMode>
      <Box height="100%" bg="black" p={4}>
        <Text><b>Title:</b> {title}</Text>
        <Text><b>Posted by:</b> {postedBy}</Text>
        <Text><b>Start Date:</b> {startDate.toUTCString()}</Text>
        <Text><b>End Date:</b> {endDate.toUTCString()}</Text>
        <Text><b>Prize amount:</b> {prizeAmount}</Text>
      </Box>
    </DarkMode>
  );
}

export default NFTViewer;
