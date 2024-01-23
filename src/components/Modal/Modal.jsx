// Modal.js
import React from 'react';
import styles from './modal.module.css';
import { useState, useEffect } from 'react';
import { redHat300, redHat400, roboto300, roboto400, roboto500 } from '@/fonts'; 
import Link from 'next/link';

function Modal({ isOpen, onClose, projectInfo }) {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (closing) {
            const timeoutId = setTimeout(() => {
                setClosing(false);
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen, closing]);

    const handleModalClose = () => {
        setClosing(true);

        setTimeout(() => {
            onClose();
        }, 500);
        
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={`${styles.modalOverlay} ${closing ? styles.fadeOut : ''}`} onClick={handleModalClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={`${styles.closeButton} ${redHat300.className}`} onClick={handleModalClose}>
                    X
                </button>
                <h3 className={`${styles.titulo} ${redHat400.className}`}>{projectInfo.title}</h3>
                <div className={styles.content}>
                    <p className={roboto300.className}>{projectInfo.description}</p>
                    <div className={styles.stackUsed}>
                        <p className={roboto400.className}>Tecnologías usadas</p>
                        {projectInfo.stack.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                    <Link className={roboto500.className} href={projectInfo.url} target="_blank" rel="noopener noreferrer">
                        Visitar sitio web
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;