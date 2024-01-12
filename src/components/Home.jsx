import commonStyles from '@/styles/commonStyles.module.css';
import styles from '@/styles/home.module.css';
import { Red_Hat_Display } from 'next/font/google';


const redHat500 = Red_Hat_Display({ subsets: ['latin'], weight: '500' });
const redHat300 = Red_Hat_Display({ subsets: ['latin'], weight: '300' });

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