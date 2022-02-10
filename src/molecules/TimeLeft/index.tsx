import Countdown from 'react-countdown';
import {
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const twoDigits = (n: number) => {
  return n > 9 ? "" + n: "0" + n;
}


interface BlockProps {
  value: string;
  label: string;
}
const Block = ({ value, label }: BlockProps) => {
  return (
    <VStack alignItems="start">
      <Text fontSize={20} fontWeight={500}>
        {value}
      </Text>
      <Text fontSize={15} fontWeight={400}>
        {label}
      </Text>
    </VStack>
  )
}
interface TimeLeftProps {
  date: number
}
const TimeLeft = ({ date }: TimeLeftProps) => {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <>
          <HStack spacing={12} mt={6}>
            <Block value={twoDigits(days)} label="Days" />
            <Block value={twoDigits(hours)} label="Hours" />
            <Block value={twoDigits(minutes)} label="Minutes" />
            <Block value={twoDigits(seconds)} label="Seconds" />
          </HStack>
          {/* {twoDigits(days)}:{twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)} */}
        </>
      )}
    />
  );
}

export default TimeLeft;
