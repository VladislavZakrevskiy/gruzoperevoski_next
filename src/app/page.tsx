import { Advanteges, Main, Park, Services } from '@/components/mainPage'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Main />
            <Services />
            <Park />
            <Advanteges />
        </main>
    )
}
