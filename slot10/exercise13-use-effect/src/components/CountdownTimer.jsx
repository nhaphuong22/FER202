import { useEffect, useState } from "react";
export default function CoundownTimer({ initialSeconds }) {
  const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <div>
      <h1>Time Remaining: {timeRemaining}</h1>
    </div>
  );
}
