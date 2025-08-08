import "./App.css";

// import logo from "./assets/jerusalem.jpeg"; // Tell webpack

function App() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
      // adjust value as needed

      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  return (
    <div dir="rtl" className="container">
      <div id="header">
        <div className="header-content">
          <div>קבוצת אדם</div>

          <button className="btn">צור קשר</button>
        </div>
      </div>
      <div className="content">
        <div className="text-section">
          <h1>צביעת דירה במבצע - הכי זול אצלנו!</h1>
        </div>
        <div>{/* <img className="img" src={logo}></img> */}</div>
      </div>

      <div className="form-section">
        <h1>מעדיפים לדבר</h1>

        <form className="contact-form">
          <label htmlFor="name">שם:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="mobile">טלפון:</label>
          <input type="tel" id="mobile" name="mobile" required />

          <label htmlFor="time">מתי נוח לדבר?</label>
          <select id="time" name="time" required>
            <option value="">-- בחר זמן --</option>
            <option value="morning">בוקר</option>
            <option value="noon">צהריים</option>
            <option value="evening">ערב</option>
          </select>

          <button type="submit" className="btn-submit">
            שלח
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
