import moment from 'moment';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function ALES_2({home}) {

    
    
    const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const end = moment('2025-11-16T09:00:00');
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
    <div className="container" style={{textAlign:'center'}}>
       <Link to='/'>{home}</Link>
        <h3 style={{color:'black'}}>ALES-2 için kalan Süre : </h3>

        <h1>
        {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika {timeLeft.seconds} Saniye
      </h1>
    </div>
  )
}

export default ALES_2