import React, { useRef } from 'react';
import styles from './contact.module.css';
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef()

  const handleSubmit = (e) => {
    emailjs
    .sendForm(
      "service_tvqwy98",
      "template_kyxkra5",
      form.current,
      "W8TlXjKW6T53a08_B"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("se envio tu mensaje")
    e.target.reset();
  };

  return (
    <>
    <h1 className={styles.contactTxT}>CONTACT</h1>
    <div className={styles.containerForm}>

        <form className={styles.formulario} onSubmit={handleSubmit} ref={form}>
          <div className={styles.firstRowForm}>

            <div className={styles.formulario__grupoR1}>
                <label htmlFor="name" className={styles.formulario__label}>Nombre:</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder='Tu nombre'
                className={styles.formulario__input}
                required
                />
            </div>
            <div className={styles.formulario__grupoR1}>
                <label htmlFor="email" className={styles.formulario__label}>Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder='Tu email'
                className={styles.formulario__input}
                required
                />
            </div>
          </div>
          <div className={styles.formulario__grupo}>
              <label htmlFor="theme" className={styles.formulario__label}>Tema:</label>
              <input
              type="text"
              id="theme"
              name="theme"
              placeholder='Tema'
              className={styles.formulario__input}
              required
              />
          </div>
          <div className={styles.formulario__grupo}>
              <label htmlFor="message" className={styles.formulario__label}>Mensaje:</label>
              <textarea
              id="message"
              name="message"
              placeholder='Mensaje'
              className={styles.formulario__input}
              required
              />
          </div>
          <button type="submit" className={styles.formulario__boton}>Enviar</button>
        </form>
    </div>
    </>
  );
}

export default Contact;