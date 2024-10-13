import moment from 'moment';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MSUScreen({title,home}) {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const end = moment('2025-03-23T09:00:00');
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
        <div className="container" style={{textAlign: 'center'}}>
            <Link to='/'>{home}</Link>
            <h3 style={{color: 'black'}}>{title} için kalan Süre :</h3>
            <h1>
                {timeLeft.days} Gün {timeLeft.hours} Saat {timeLeft.minutes} Dakika {timeLeft.seconds} Saniye
            </h1>

            {/* Ek Bilgiler */}
            <div style={{marginTop: '20px', textAlign: 'left', padding: '20px'}}>
                <h4>MSÜ (Milli Savunma Üniversitesi) Sınavı Nedir?</h4>
                <p>MSÜ sınavı, Milli Savunma Üniversitesi bünyesindeki askeri okullara öğrenci seçmek için düzenlenen önemli bir sınavdır. Türk Silahlı Kuvvetleri'nde subay ya da astsubay olmak isteyen öğrenciler için bu sınav kritik bir adımdır.</p>
                
                <h4>Sınava Hazırlık Önerileri</h4>
                <ul>
                    <li>Zaman yönetimi yaparak çalışmaya başlamalısın. Günlük çalışma saatlerini belirleyip bunlara sadık kal.</li>
                    <li>Düzenli olarak deneme sınavları çözerek sınav formatına alışmalısın.</li>
                    <li>Fiziksel kondisyonunu da ihmal etmemelisin. Askeri sınavlar için fiziksel yeterlilik önem taşır.</li>
                </ul>
            </div>
        </div>
    );
}

export default MSUScreen;
