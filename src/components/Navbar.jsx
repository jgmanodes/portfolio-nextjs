'use client';

import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import { Red_Hat_Display } from 'next/font/google';


const redHat400 = Red_Hat_Display({ subsets: ['latin'], weight: '400' })
const redHat700 = Red_Hat_Display({ subsets: ['latin'], weight: '700' })

function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <button onClick={() => scrollToSection('home')} className={redHat700.className}>Jorge Gonzalez</button>
            </div>
            <div className={styles.navigation}>
                <button onClick={() => scrollToSection('about')} className={redHat400.className}>Acerca de mi</button>
                <button onClick={() => scrollToSection('projects')} className={redHat400.className}>Proyectos</button>
                <button onClick={() => scrollToSection('skills')} className={redHat400.className}>Habilidades</button>
                <button onClick={() => scrollToSection('contact')} className={redHat400.className}>Contacto</button>
                
                {/* <Link onClick={() => scrollToSection('home')} className={redHat400.className} href="#about">Acerca de mi</Link>
                <Link onClick={() => scrollToSection('projects')} className={redHat400.className} href="#projects">Proyectos</Link>
                <Link onClick={() => scrollToSection('skills')} className={redHat400.className} href="#skills">Habilidades</Link>
                <Link onClick={() => scrollToSection('contact')} className={redHat400.className} href="#contact">Contacto</Link> */}
            </div>
        </header>
    );
}

export default Navbar;