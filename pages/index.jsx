import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from '../styles/home.module.scss';
import { strings } from '../translations';
// Main Images
import PrimaryLayout from '../layouts/primaryLayout/primaryLayout.component';
import BeerSplashImage from '../public/images/beersplash_main.jpg';
import ElianaBowlImage from '../public/images/elianabowl_main.jpg';
import FloatingBeerImage from '../public/images/floatingbeer_main.jpg';
import FrenchToastImage from '../public/images/frenchtoast_main.jpg';

const Home = () => {
  const locale = useRouter().locale;
  let imageIndex = 0;
  let endAnim = true;

  useEffect(() => {
    // Resetting Classes
    const foodActive = document.querySelector('.hero1');
    const drinkDeactive = document.querySelector('.hero2');
    const productDeactive = document.querySelector('.hero3');
    const videoDeactive = document.querySelector('.hero4');
    if (foodActive.classList.contains('home_active__7prY2')) {
    } else {
      foodActive.classList.add('home_active__7prY2');
      drinkDeactive.classList.remove('home_active__7prY2');
      productDeactive.classList.remove('home_active__7prY2');
      videoDeactive.classList.remove('home_active__7prY2');
    }
  }, [locale]);

  const scrollUp = () => {
    console.log('scroll Up');
    if (imageIndex === 0) {
      endAnim = false;
      imageIndex = 3;
      const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
      const removeHeroElement = document.querySelector(`.hero1`);
      addHeroElement.classList.add(styles.active);
      removeHeroElement.classList.remove('home_active__7prY2');
      setTimeout(() => {
        endAnim = true;
      }, 600);
    } else {
      endAnim = false;
      imageIndex--;
      const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
      const removeHeroElement = document.querySelector(
        `.hero${imageIndex + 2}`
      );
      addHeroElement.classList.add(styles.active);
      removeHeroElement.classList.remove('home_active__7prY2');
      setTimeout(() => {
        endAnim = true;
      }, 600);
    }
  };

  const scrollDown = () => {
    console.log('Scroll Down');
    if (imageIndex === 3) {
      endAnim = false;
      imageIndex = 0;
      const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
      const removeHeroElement = document.querySelector(`.hero4`);
      addHeroElement.classList.add(styles.active);
      removeHeroElement.classList.remove('home_active__7prY2');
      setTimeout(() => {
        endAnim = true;
      }, 600);
    } else {
      endAnim = false;
      imageIndex++;
      const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
      const removeHeroElement = document.querySelector(`.hero${imageIndex}`);
      addHeroElement.classList.add(styles.active);
      removeHeroElement.classList.remove('home_active__7prY2');
      setTimeout(() => {
        endAnim = true;
      }, 600);
    }
  };

  const scrollEventHandler = (event) => {
    const yDelta = event.deltaY;
    if (endAnim) {
      if (yDelta / 100 < 0) {
        scrollUp();
      } else {
        scrollDown();
      }
    }
  };

  // Swipe Events
  const handlers = useSwipeable({
    onSwipedUp: () => scrollDown(),
    onSwipedDown: () => scrollUp(),
  });

  return (
    <div
      className={styles.container}
      {...handlers}
      onWheel={(e) => scrollEventHandler(e)}
    >
      <Head>
        <title>{strings[locale].homeTitle}</title>
        <meta name="description" content={strings[locale].homeDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <header className={styles.homepageContainer}>
          <main
            className={`${styles.homeFoodContainer} hero1 justify-content-start justify-content-md-end ${styles.active}`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={FrenchToastImage}
                alt="French toast food photography by Fleury Photography"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{strings[locale].foodHeader}</h1>
              <h2>{strings[locale].foodBody}</h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {strings[locale].viewPortfolio}
              </Link>
            </div>
          </main>
          <div
            className={`${styles.homeBeverageContainer} hero2 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={FloatingBeerImage}
                alt="Floating beer, beverage photography by Julien Fleury"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{strings[locale].beverageHeader}</h1>
              <h2>{strings[locale].beverageBody}</h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {strings[locale].viewPortfolio}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.homeProductContainer} hero3 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={ElianaBowlImage}
                alt="Product photography of a ceramic bowl"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{strings[locale].productHeader}</h1>
              <h2>{strings[locale].productBody}</h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {strings[locale].viewPortfolio}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.homeVideoContainer} hero4 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={BeerSplashImage}
                alt="Beer splashing into water"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{strings[locale].videoHeader}</h1>
              <h2>{strings[locale].videoBody}</h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {strings[locale].viewPortfolio}
              </Link>
            </div>
          </div>
          <div className={styles.mainArrowContainer}>
            <div className={styles.arrowContainer}>
              <div className={styles.lineContainer}>
                <div className={styles.line}></div>
              </div>
            </div>
          </div>
        </header>
      </PrimaryLayout>
    </div>
  );
};

export default Home;
