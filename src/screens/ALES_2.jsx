import moment from 'moment';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ALES_2.css';  // CSS dosyasını ekliyoruz

function ALES_2({ home }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const end = moment('2025-11-16T09:00:00'); // ALES-2 sınav tarihi
      const duration = moment.duration(end.diff(now));

      setTimeLeft({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <Link to="/">{home}</Link>
      <h3 className="title">ALES-2 için kalan süre:</h3>
      <h1 className="countdown">
        {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika {timeLeft.seconds} Saniye
      </h1>
    </div>
  );
}

export default ALES_2;
