import moment from 'moment';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function TYTScreen({home}) {

    
    
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
      const interval = setInterval(() => {
          const now = moment();
          const end = moment('2025-06-15T09:00:00');
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
    <h3 style={{color:'black'}}>TYT için kalan Süre:</h3>
    <h1>
        {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika {timeLeft.seconds} Saniye
    </h1>

    {/* Ek içerik bölümü */}
    <div style={{marginTop: '20px'}}>
        <h4>TYT Nedir?</h4>
        <p>TYT (Temel Yeterlilik Testi), üniversiteye giriş sınavının ilk aşamasıdır. Sınav, Türkçe, Matematik, Fen ve Sosyal Bilimler alanlarında temel yeterlilikleri ölçer.</p>
        <h4>Nasıl Hazırlanmalı?</h4>
        <p>TYT'ye hazırlanırken zaman yönetimi, düzenli tekrarlar ve deneme sınavları büyük önem taşır. Her gün belirli bir süreyi ders çalışmaya ayırarak başarı elde edebilirsin.</p>
    </div>
</div>
  )
}

export default TYTScreen