'use client'

import commonStyles from '@/styles/commonStyles.module.css'
import styles from './projects.module.css'
import { redHat500, roboto300 } from '@/fonts'
import Image from 'next/image'
import Modal from '@/components/Modal/Modal'
import { useState } from 'react'
import { SiReact, SiNodedotjs, SiExpress, SiMysql, SiBootstrap, SiNextdotjs, SiHtml5, SiCss3 } from 'react-icons/si'

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (projectInfo) => {
    setCurrentProject(projectInfo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  const projectsData = [
    {
      title: 'Renovatrash',
      url: 'https://renovatrash.onrender.com/',
      description: 'Proyecto realizado dentro de bootcamp impartido por Generation Chile, en el cual me desempeñe como Scrum Master, organizando y asignando tareas. También como desarrollador Full Stack, mis tareas principales fueron en el frontend realizando el primer diseño para ser presentado al cliente y desarrollar la sección de Noticias. Además de colaborar con el equipo de backend para realizar CRUD y conexión con base de datos.',
      imageUrl: '/img/renovatrash-page.png', 
      stack: [
        <SiReact key="1"/>,
        <SiNodedotjs key="2"/>,
        <SiExpress key="3"/>,
        <SiMysql key="4"/>,
        <SiBootstrap key="5"/>,
      ],
    },
    {
      title: 'Portafolio',
      url: 'https://jorgegonzalezdev.vercel.app/',
      description: 'Ésta la primera versión de mi sitio web, un espacio dedicado a mis proyectos y experiencias en el ámbito de la programación. Desarrollado utilizando Next.js y estilizado con CSS puro, este portafolio refleja mi compromiso y habilidades en el mundo del desarrollo. Explora mis proyectos y descubre la esencia de mi trabajo en este espacio digital.',
      imageUrl: '/img/portafolio-page.png', 
      stack: [
        <SiReact key="1" />,
        <SiNextdotjs key="2"/>,
        <SiCss3 key="4"/>,
      ],
    },
    {
      title: 'Próximamente',
      url: 'https://jorgegonzalezdev.vercel.app/',
      description: 'Ésta la primera versión de mi sitio web, un espacio dedicado a mis proyectos y experiencias en el ámbito de la programación. Desarrollado utilizando Next.js y estilizado con CSS puro, este portafolio refleja mi compromiso y habilidades en el mundo del desarrollo. Explora mis proyectos y descubre la esencia de mi trabajo en este espacio digital.',
      imageUrl: '/img/próximamente-page.png', 
      stack: [
        <SiReact key="1" />,
        <SiNextdotjs key="2"/>,
        <SiCss3 key="4"/>,
      ],
    },
  ];


  return (
    <div id="projects" className={commonStyles.section}>
      <h2 className={redHat500.className}>Proyectos</h2>
      <div className={styles.container}>
        <p className={roboto300.className}>Te invito a explorar una selección de mis proyectos personales y colaborativos, destacando mi dedicación y habilidades en la programación.</p>
        <div className={styles.cardsContainer}>
          {projectsData.map((project, index) => (
              <div className={styles.card} key={index} onClick={() => openModal(project)}>
                <Image className={styles.cardImg} src={`/img/${project.title.toLowerCase()}-page.png`} alt={`Imagen de web: ${project.title}`} width={300} height={300}/>
                <h4 className={`${styles.cardTitle} ${redHat500.className}`}>{project.title}</h4>
              </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} projectInfo={currentProject} />
    </div>
  )
}

export default Projects