'use client';

import styles from './navbar.module.css';
import { redHat300, redHat400, redHat700 } from '@/fonts';
import { FiMenu } from 'react-icons/fi';

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
            </div>
            <div className={styles.responsiveNavigation}>
                <button>
                    <FiMenu />
                </button>
                <div className={styles.responsiveMenu}>
                    <button onClick={() => scrollToSection('about')} className={redHat400.className}>Acerca de mi</button>
                    <button onClick={() => scrollToSection('projects')} className={redHat400.className}>Proyectos</button>
                    <button onClick={() => scrollToSection('skills')} className={redHat400.className}>Habilidades</button>
                    <button onClick={() => scrollToSection('contact')} className={redHat400.className}>Contacto</button>  
                </div>
            </div>
        </header>
    );
}

export default Navbar;