import Countdown from 'react-countdown';

const twoDigits = (n: number) => {
  return n > 9 ? "" + n: "0" + n;
}

interface TimeLeftProps {
  date: number
}
const TimeLeft = ({ date }: TimeLeftProps) => {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <> {twoDigits(days)}:{twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}</>
      )}
    />
  );
}

export default TimeLeft;
