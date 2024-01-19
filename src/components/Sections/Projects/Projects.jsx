import commonStyles from '@/styles/commonStyles.module.css'
import styles from './projects.module.css'
import { redHat300, roboto300 } from '@/fonts'
import Image from 'next/image'


// I need that when I hover one card it changes its width to 30% and the others become smaller


function Projects() {
  return (
    <div id="projects" className={commonStyles.section}>
      <h2 className={redHat300.className}>Proyectos</h2>
      <div className={styles.container}>
        <p className={roboto300.className}>Estos son algunos de mis proyectos personales y colaboraciones que he ido desarrollando</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            
            <Image src="/img/renovatrash-page.png" alt="Imágen de web: Renovatrash" width={300} height={300} />

            {/* <p>Proyecto realizado dentro de bootcamp impartido por Generation Chile, en el cual me desempeñe como Scrum Master, organizando y asignando tareas. También como desarrollador Full Stack, mis tareas principales fueron en el frontend realizando el primer diseño para ser presentado al cliente y desarrollar la sección de Noticias. Además de colaborar con el equipo de backend para realizar CRUD y conexión con base de datos.</p> */}
          </div>
          <div className={styles.card}>
            Imagen: Portfolio..
          </div>
          <div className={styles.card}>
            Imagen: Próximamente..
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects