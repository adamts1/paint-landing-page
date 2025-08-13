import { useRef, useState } from "react";
import "./Form.css";

import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Form: React.FC = () => {
  const [success, setSuccess] = useState(false);

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
        .then(() => {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
          form.current!.reset();
        })
        .catch(() => console.log("catch"));
    } else {
      console.error("Form ref is not assigned");
    }
  };

  return (
    <div style={{ position: "relative", padding: 20 }}>
      <form ref={form} onSubmit={sendEmail}>
        <AnimatePresence>
          {success && (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                transform: "translate(-50%, -50%)",
                fontSize: "1rem",
                color: "green",
                width: "100%",
              }}
            >
              <div className="flex">
                <div className="text"> פרטים התקבלו, נחזור אליך בהקדם ✅</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </div>
  );
};

Form.displayName = "Form";
export default Form;
