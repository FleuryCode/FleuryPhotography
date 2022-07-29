import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from '../styles/home.module.scss';
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
        <title>Fleury Photography</title>
        <meta name="description" content="Fleury Photography Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <header className={styles.homepageContainer}>
          <main
            className={`${styles.homeFoodContainer} hero1 justify-content-start justify-content-md-end ${styles.active}`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                layout="fill"
                objectFit="cover"
                src={FrenchToastImage}
                alt="French toast food photography by Fleury Photography"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{'FOOD'}</h1>
              <h2>
                {
                  'Good photos of food evoke emotion. Great photos drive action; people visit restaurants, buy prepared dinners online, or try recipes they wouldn’t otherwise. Need photos for your restaurant website, culinary magazine, or blog? Contact us.'
                }
              </h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {'View Portfolio'}
              </Link>
            </div>
          </main>
          <div
            className={`${styles.homeBeverageContainer} hero2 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                layout="fill"
                objectFit="cover"
                src={FloatingBeerImage}
                alt="Floating beer, beverage photography by Julien Fleury"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{'BEVERAGE'}</h1>
              <h2>
                {
                  'An image is capable of influencing an individual to buy a fine wine, river beer, or happy hour cocktail, and that’s pretty powerful. Fleury Photography can shoot any beverage product to promote your brand and have the public thirsting for more.'
                }
              </h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {'View Portfolio'}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.homeProductContainer} hero3 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                layout="fill"
                objectFit="cover"
                src={ElianaBowlImage}
                alt="Product photography of a ceramic bowl"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{'PRODUCT'}</h1>
              <h2>
                {
                  'Commercial product photography is the house specialty. We have has worked with online retailers, technology vendors, beauty salons, and camera suppliers to give their products personality. Using a delicate balance of lighting and expert photography, we bring to life even the smallest details.'
                }
              </h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {'View Portfolio'}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.homeVideoContainer} hero4 justify-content-start justify-content-md-end`}
          >
            <div className={styles.homeImageContainer}>
              <Image
                layout="fill"
                objectFit="cover"
                src={BeerSplashImage}
                alt="Beer splashing into water"
              />
            </div>
            <div className={styles.homeTextInfo}>
              <h1>{'VIDEO'}</h1>
              <h2>
                {
                  'Videos are the way forward. A good video can invoke someone to come to your restaurant, buy your beer or try your beauty products. Let us bring your vision into motion with our videography.'
                }
              </h2>
              <Link href={'/'} className={styles.viewPortfolioButton}>
                {'View Portfolio'}
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
