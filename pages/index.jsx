import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/home.module.scss';
// Main Images
// import FrenchToastImage from '../public/images/frenchtoast_main.jpg';
// import FloatingBeerImage from '../public/images/floatingbeer_main.jpg';
// import ElianaBowlImage from '../public/images/elianabowl_main.jpg';
// import BeerSplashImage from '../public/images/beersplash_main.jpg';

const Home = () => {
  const locale = useRouter().locale;
  let imageIndex = 0;
  let endAnim = true;
  return (
    <div className={styles.container}>
      <Head>
        <title>Fleury Photography</title>
        <meta name="description" content="Fleury Photography Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;
