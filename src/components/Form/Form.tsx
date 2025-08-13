import { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      console.log(form.current);

      emailjs
        .sendForm(
          "service_hj77wbm",
          "template_4xrje7n",
          form.current,
          "8WUpHfYP9_IBLCf4M"
        )
        .then(() => console.log("success"))
        .catch(() => console.log("catch"));
    } else {
      console.error("Form ref is not assigned");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">שם מלא</label>
      <input id="name" name="name" placeholder="שם" required />
      <label htmlFor="phone">טלפון</label>
      <input id="phone" name="phone" placeholder="" required />
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
          או התקשר: <strong>052-5600493</strong>
        </div>
      </div>
    </form>
  );
};

Form.displayName = "Form";
export default Form;
