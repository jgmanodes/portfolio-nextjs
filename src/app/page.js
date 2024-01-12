import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

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
