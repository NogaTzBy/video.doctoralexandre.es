import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-17T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white px-3 py-1.5 text-center max-w-xs mx-auto">
      <p className="text-xs font-medium mb-1">Las inscripciones se cierran en...</p>
      <div className="flex justify-center space-x-1 text-xs font-bold">
        <div className="flex flex-col items-center">
          <span className="text-sm">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-xs opacity-90">d</span>
        </div>
        <span className="text-sm">:</span>
        <div className="flex flex-col items-center">
          <span className="text-sm">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs opacity-90">h</span>
        </div>
        <span className="text-sm">:</span>
        <div className="flex flex-col items-center">
          <span className="text-sm">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs opacity-90">m</span>
        </div>
        <span className="text-sm">:</span>
        <div className="flex flex-col items-center">
          <span className="text-sm">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs opacity-90">s</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;