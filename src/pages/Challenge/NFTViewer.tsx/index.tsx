import { Box, DarkMode, Text } from "@chakra-ui/react";

interface NFTViewerProps {
  title: string;
  postedBy: string;
  startDate: string;
  endDate: string;
  prizeAmount: string;
}
const NFTViewer = ({
  title,
  postedBy,
  startDate,
  endDate,
  prizeAmount,
}: NFTViewerProps) => {
  return (
    <DarkMode>
      <Box height="100%" bg="black" p={4}>
        <Text><b>Title:</b> {title}</Text>
        <Text><b>Posted by:</b> {postedBy}</Text>
        <Text><b>Start Date:</b> {startDate}</Text>
        <Text><b>End Date:</b> {endDate}</Text>
        <Text><b>Prize amount:</b> {prizeAmount}</Text>
      </Box>
    </DarkMode>
  );
}

export default NFTViewer;
