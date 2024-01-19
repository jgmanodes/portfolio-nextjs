import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Home from '@/components/Sections/Home/Home'
import About from '@/components/Sections/About/About'
import Skills from '@/components/Sections/Skills/Skills'
import Projects from '@/components/Sections/Projects/Projects'
import Contact from '@/components/Sections/Contact/Contact'

export default function index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
