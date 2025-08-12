import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../header/Header";
import "./Main.css";
import Footer from "../Footer/Footer";

const Main: React.FC = () => {
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  // window.addEventListener("scroll", function () {
  //   const header = document.getElementById("header");

  //   if (window.scrollY > 50) {
  //     // adjust value as needed

  //     header?.classList.add("scrolled");
  //   } else {
  //     header?.classList.remove("scrolled");
  //   }
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const name = e.target['name'].value.trim();
    // const phone = e.target.phone.value.trim();
    // if (!name || !phone) {
    //   alert("אנא מלא שם ומספר טלפון");
    //   return;
    // }
    // alert("תודה! פנייתך נשלחה. נחזור אליך בהקדם.");
    // e.target.reset();
  };

  return (
    <div className="container" dir="rtl">
      <Header />

      {/* כפתור נגישות */}
      <button
        className="accessibility-btn"
        aria-label="תפריט נגישות"
        onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
      >
        ♿
      </button>

      <a
        href="aa"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="צור קשר ב-WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* תפריט נגישות */}
      {showAccessibilityMenu && (
        <div className="accessibility-menu fade-in">
          <button onClick={() => (document.body.style.fontSize = "larger")}>
            הגדלת טקסט
          </button>
          <button
            onClick={() => (document.body.style.backgroundColor = "#000")}
          >
            ניגודיות גבוהה
          </button>
          <button onClick={() => alert("מידע על הנגישות באתר")}>
            מידע על הנגישות
          </button>
        </div>
      )}

      <section className="hero">
        <div>
          <h1 className="title">
            הבית שלך בצבע חדש — מקצועיות ואיכות ללא פשרות
          </h1>
          <p>
            שדרוג מיידי של מראה הבית או העסק עם חומרים מובילים, צוות מקצועי
            וניהול פרויקט שקוף. שירותים פרטיים ועסקיים, עבודות חוץ ופנים, וצבעים
            שיחזיקו שנים.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              קבל הצעת מחיר חינם
            </a>
            <a href="#gallery" className="link">
              צפה בדוגמאות
            </a>
          </div>
          <div className="features">
            <div className="feature">
              <div className="icon">🎯</div>
              <div>
                <h4>מקצועיות</h4>
                <p>צוות מיומן עם ניסיון רב בכל סוגי הצבעים והגימורים.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">⏱</div>
              <div>
                <h4>עמידה בזמנים</h4>
                <p>לוחות זמנים ברורים ודייקנות במסירה.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">💎</div>
              <div>
                <h4>גימור מושלם</h4>
                <p>תשומת לב לפרטים וחומרים איכותיים בלבד.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800
"
            alt="בית צבוע"
          />
        </div>
      </section>

      <section id="gallery">
        <h2>עבודות שלנו — לפני / אחרי</h2>
        <div className="gallery">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800"
              alt="before-after"
            />
            <div className="label">שדרוג חזית בית פרטי</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=800"
              alt="before-after"
            />
            <div className="label">חידוש בניין משרדים</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=800"
              alt="before-after"
            />
            <div className="label">צביעת פנים דירה</div>
          </div>
        </div>
      </section>

      <section>
        <h2>השירותים שלנו</h2>
        <div className="services">
          <div className="service">
            <h5>צביעת חוץ</h5>
            <p>
              הגנה לוקוסית מפני מזג אוויר עם צבעים עמידים ושימור לאורך שנים.
            </p>
          </div>
          <div className="service">
            <h5>צביעת פנים</h5>
            <p>מגוון גוונים, גימורים דקורטיביים וטיפים לבחירת צבעים לחלל.</p>
          </div>
          <div className="service">
            <h5>עבודות דקורטיביות</h5>
            <p>טקסטורות, פטרנים, וטכניקות מיוחדות ליצירת אווירה אישית.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-card">
          <h3>קבל הצעת מחיר חינם</h3>
          <p>
            מלא את פרטיך ונחזור אליך עם הצעה תואמת וייעוץ מקצועי ללא התחייבות.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">שם מלא</label>
            <input id="name" name="name" placeholder="שם" required />
            <label htmlFor="phone">טלפון</label>
            <input id="phone" name="phone" placeholder="05X-XXXXXXX" required />
            <label htmlFor="message">תיאור קצר של הפרויקט</label>
            <textarea
              id="message"
              name="message"
              placeholder="גודל הפרויקט, חוץ/פנים, דחיפות..."
              required
            ></textarea>
            <div className="submit-row">
              <button type="submit" className="btn-primary">
                שלח ונחזור אליך
              </button>
              <div className="phone-hint">
                או התקשר: <strong>050-1234567</strong>
              </div>
            </div>
          </form>
        </div>
        <div className="side-cards">
          <div className="contact-card">
            <h4>מה תקבל כשנגיע אליך?</h4>
            <ul>
              <li>בדיקה והערכת מצב מקצועית</li>
              <li>הצעת מחיר מפורטת ללא התחייבות</li>
              <li>שימוש בחומרים מובילים ואחריות על עבודה</li>
            </ul>
          </div>
          <div className="contact-card">
            <h4>אחריות ושירות</h4>
            <p>
              אנו מעניקים אחריות על עבודות הצבע ונשאיר אחרינו אתר נקי ומסודר.
            </p>
          </div>
        </div>
      </section>

      <div className="cta">
        <h3>רוצה להתחיל? קבע פגישה לייעוץ חינם עוד היום!</h3>
        <a className="btn-primary btn-accent" href="#contact">
          קבע פגישה
        </a>
      </div>
      <Footer />
    </div>
  );
};

Main.displayName = "Main";
export default Main;
