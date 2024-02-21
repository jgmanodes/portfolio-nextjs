import commonStyles from '@/styles/commonStyles.module.css'
import styles from './about.module.css'
import { roboto400, redHat400 } from '@/fonts'
import Image from 'next/image'

function About() {
  return (
    <div id="about" className={commonStyles.section}>
      <h2 className={redHat400.className}>Acerca de mi</h2>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/skills.gif"
            alt="Video sobre mi utilizando distintas plataformas como Visual Studio Code, Blender, entre otros."
            width={600}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={roboto400.className}>Tengo 28 años, soy de Santiago de Chile 🇨🇱. Llevo 5 años siendo padre y 2 años como desarrollador. Me gusta el cine, la música y el arte. Me apasiona la ciencia y la tecnología.</p>
          <p className={roboto400.className}>Hace 3 años me dediqué a explorar otras ramas por mi cuenta, viendo tutoriales y completando cursos adquirí habilidades en la ilustración, el modelado 3D y programación web. En Septiembre del 2023 obtuve un certificado como Desarrollador Full Stack por Generation Chile.</p>
          <p className={roboto400.className}>Con mi conocimiento y experiencia, estoy capacitado para diseñar y desarrollar páginas web y aplicaciones utilizando varios lenguajes y frameworks. Mi enfoque se centra en la utilización de las mejores prácticas y estándares de la industria, garantizando de esta manera la calidad y eficiencia en cada proyecto.</p>
        </div>
      </div>
    </div>
  )
}

export default About