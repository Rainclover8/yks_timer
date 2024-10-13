import moment from 'moment';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DILScreen.css';  // CSS dosyasını ekliyoruz

function DILScreen({ title, home }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const end = moment('2025-06-15T09:00:00'); // DİL sınavı tarihi
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
      <h3 className="title">{title} için kalan süre:</h3>
      <h1 className="countdown">
        {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika {timeLeft.seconds} Saniye
      </h1>
    </div>
  );
}

export default DILScreen;
