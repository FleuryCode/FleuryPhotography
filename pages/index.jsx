import Head from "next/head";
import { useRouter } from "next/router";
import styles from '../styles/home.module.scss';

const Home = () => {
    const locale = useRouter().locale;
    return (
        <div className={styles.container}>
            <Head>
                <title>Fleury Photography</title>
                <meta name="description" content="Fleury Photography Description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Home;