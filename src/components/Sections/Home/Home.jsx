import commonStyles from '@/styles/commonStyles.module.css';
import styles from './home.module.css';
import { redHat300, redHat500 } from '@/fonts';
import Image from 'next/image'
const srcLight = '/img/light-mode.png'
const srcDark = '/img/dark-mode.png'


function Home () {
    
    return (
        <div className={commonStyles.section}>
            <div className={styles.container} id='home'>
                <div className={styles.text}>
                    <h1 className={redHat500.className}>Full stack developer</h1>
                    <h3 className={redHat300.className}>Autodidacta, creativo y curioso.</h3>
                </div>
                <div className={styles.image}>
                    <Image
                        // {...rest}
                        src={srcLight}
                        className={styles.imgLight}
                        alt="Ilustración de retrato personal."
                        width={300}
                        height={200}
                    />
                    <Image
                        // {...rest}
                        src={srcDark}
                        className={styles.imgDark}
                        alt="Ilustración de retrato personal."
                        width={600}
                        height={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home