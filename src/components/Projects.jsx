import commonStyles from '@/styles/commonStyles.module.css'
import styles from '@/styles/projects.module.css'
import { redHat300 } from '@/fonts'


// I need that when I hover one card it changes its width to 30% and the others become smaller


function Projects() {
  return (
    <div id="projects" className={commonStyles.section}>
      <h2 className={redHat300.className}>Proyectos</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          Imagen: RenovaTrash..
        </div>
        <div className={styles.card}>
          Imagen: Portfolio..
        </div>
        <div className={styles.card}>
          Imagen: Próximamente..
        </div>
      </div>
    </div>
  )
}

export default Projects