import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import commonStyles from '@/styles/commonStyles.module.css'
import styles from './contact.module.css'
import { redHat300, roboto300, roboto400 } from '@/fonts'

function Contact() {
  return (
    <div id="contact" className={commonStyles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={redHat300.className}>Mantente en contacto</h2>
          <div className={styles.text}>
            <p className={roboto300.className}>¿Tienes algún proyecto en donde mis habilidades y experiencias te ayuden?</p>
            <p className={roboto400.className}>¡No dudes en contactarme! Estaré encantado de trabajar contigo 👋</p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form
            action="https://formsubmit.co/db471c14615df20e46802d15a9270bc6"
            method="POST"
            className={styles.form}
          >
            <label htmlFor="name"> Nombre</label>
            <input type="text" name="name" id="name" autoComplete="name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" required />
            
            <label htmlFor="subject">Asunto</label>
            <input type="text" name="subject" id="subject" autoComplete="off" required />
            
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" cols="15" rows="5" autoComplete="off" required />

            <input type="hidden" name="_next" id="next-page" autoComplete="off" value="http://www.google.com/" />
            <input type="hidden" name="_captcha" id="no-captcha" autoComplete="off" value="false" />
            <button className={styles.formButton} type="submit">Enviar</button>
          </form>
          <div className={styles.socials}>
              <p className={roboto300.className}>Acompáñame en este viaje, ¡sígueme en mis redes sociales!</p>
              <div className={styles.socialIcons}>
                <Link
                  href="https://github.com/jgmanodes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jgmanodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <SiLinkedin />
                </Link>
              </div>
          </div>
          <Link 
            href="https://drive.google.com/drive/folders/1v3fssHd1xjRZhqbn_AQq9Z_aFNdUuvjP?usp=drive_link"
            className={roboto400.className}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ve mis certificados y CV aquí
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact