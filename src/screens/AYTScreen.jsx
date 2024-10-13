import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AYTScreen({ home }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false); // Zaman dolduğunda mesaj göstermek için

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const end = moment("2025-06-16T09:00:00");
      const duration = moment.duration(end.diff(now));

      if (duration.asSeconds() <= 0) {
        setExpired(true); // Zaman dolduğunda expired'ı true yap
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(duration.asDays()),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Link to="/">{home}</Link>
      <h3 style={{ color: "black" }}>AYT için kalan Süre :</h3>
      {!expired ? ( // Eğer süre bitmediyse geri sayımı göster
        <h1>
          {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika{" "}
          {timeLeft.seconds} Saniye
        </h1>
      ) : (
        <h1>Sınav başladı!</h1> // Eğer süre bittiyse "Sınav başladı" mesajını göster
      )}
    </div>
  );
}

export default AYTScreen;
