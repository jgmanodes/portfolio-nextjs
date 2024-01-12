import commonStyles from '@/styles/commonStyles.module.css'
import { redHat300 } from '@/fonts'
import styles from '@/styles/skills.module.css'
import Link from 'next/link'

// react-icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiThreedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiBlender,
  SiAdobeillustrator,
  SiFigma
} from "react-icons/si";


function Skills() {
  return (
    <div id="skills" className={commonStyles.section}>
      <h2 className={redHat300.className}>Habilidades</h2>
      <div className={styles.container}>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiHtml5 />
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiCss3 />
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiJavascript />
        </Link>
        <Link
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiReact />
        </Link>
        <Link
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiNextdotjs />
        </Link>
        <Link
          href="https://nodejs.org/docs/latest/api/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiNodedotjs />
        </Link>
        <Link
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiExpress />
        </Link>
        <Link
          href="https://www.w3schools.com/mysql/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiMysql />
        </Link>
        <Link
          href="https://www.mongodb.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiMongodb />
        </Link>
        <Link
          href="https://threejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiThreedotjs />
        </Link>
        <Link
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiBootstrap />
        </Link>
        <Link
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiTailwindcss />
        </Link>
        <Link
          href="https://git-scm.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiGit />
        </Link>
        <Link
          href="https://www.blender.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiBlender />
        </Link>
        <Link
          href="https://www.adobe.com/cl/products/illustrator.html"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiAdobeillustrator />
        </Link>
        <Link
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.skillLink}
        >
          <SiFigma />
        </Link>
      </div>
    </div>
  )
}

export default Skills 