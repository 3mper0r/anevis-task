import { useEffect, useState } from "react"

const DigitalClock = () => {
        
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
        <span className="text-blue-700 font-bold">{currentTime.toLocaleTimeString()}</span>
        <span className="text-blue-700 font-bold float-right m-10">{currentTime.toLocaleDateString()}</span>
    </>    
  );
}

export default DigitalClock

    