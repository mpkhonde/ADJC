import React, { useState } from "react";
import "./Contact.css";

interface ContactProps {
  t: any; // Du kan byta till t: LanguageContent om du har importerat det
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xnnpblbp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        alert("Något gick fel. Försök igen.");
      }
    });
  };

  return (
    <div className="contact-container">
      <section id="contact">
        <h2>{t.contact}</h2>
        <p>{t.contactIntro}</p>

        {sent ? (
          <div className="success-message">
            <h3>{t.thanksMessage.replace("{name}", "").replace("{email}", "").replace("{phone}", "")}</h3>
            <p>{t.fillRequired}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.namePlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t.phone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t.phonePlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.messagePlaceholder}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              {t.send}
            </button>
          </form>
        )}

        <section className="address-section">
          <h3>{t.findUs}</h3>
          <p className="address-text">
            {t.addressLine1}<br />
            {t.addressLine2}
          </p>
        </section>
      </section>
    </div>
  );
};

export default Contact;
