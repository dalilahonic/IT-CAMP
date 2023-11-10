import { useEffect, useState } from 'react';

const Countdown = () => {
  let difference;
  function calculateTimeUntilNovember11() {
    const currentDate = new Date();
    const targetDate = new Date('2023-11-11T00:00:00Z');

    difference = targetDate - currentDate;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
      (difference % (1000 * 60)) / 1000
    );

    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [count, setCount] = useState(
    calculateTimeUntilNovember11()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(calculateTimeUntilNovember11());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      {count.hours}:{count.minutes}:{count.seconds}
    </div>
  );
};
export default Countdown;
