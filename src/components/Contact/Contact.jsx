import React, { useState } from 'react';
import styles from './contact.module.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    theme: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // código para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.formulario__grupo}>
        <label htmlFor="name" className={styles.formulario__label}>Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm(e.target.value)}
          className={styles.formulario__input}
          required
        />
      </div>
      <div className={styles.formulario__grupo}>
        <label htmlFor="email" className={styles.formulario__label}>Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm(e.target.value)}
          className={styles.formulario__input}
          required
        />
      </div>
      <div className={styles.formulario__grupo}>
        <label htmlFor="theme" className={styles.formulario__label}>Tema:</label>
        <input
          type="text"
          id="theme"
          name="theme"
          value={form.theme}
          onChange={(e) => setForm(e.target.value)}
          className={styles.formulario__input}
          required
        />
      </div>
      <div className={styles.formulario__grupo}>
        <label htmlFor="message" className={styles.formulario__label}>Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => setForm(e.target.value)}
          className={styles.formulario__input}
          required
        />
      </div>
      <button type="submit" className={styles.formulario__boton}>Enviar</button>
    </form>
  );
}

export default Contact;