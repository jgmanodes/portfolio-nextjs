import commonStyles from '@/styles/commonStyles.module.css';
import styles from './home.module.css';
import { redHat300, redHat500 } from '@/fonts';

function Home() {
    return (
        <div className={commonStyles.section}>
            <div className={styles.container} id='home'>
                <div className={styles.text}>
                    <h1 className={redHat500.className}>Full stack developer</h1>
                    <h3 className={redHat300.className}>Autodidacta, creativo y curioso.</h3>
                </div>
                <div className={styles.image}>
                </div>
            </div>
        </div>
    )
}

export default Home