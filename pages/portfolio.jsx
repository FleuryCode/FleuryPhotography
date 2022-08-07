import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../layouts/primaryLayout/primaryLayout.component';
import PortfolioHeader from '../public/images/portfolioHeader.jpg';
import styles from '../styles/portfolio.module.scss';
import { strings } from '../translations';

const Portfolio = () => {
  const { locale } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].portfolioTitle}</title>
        <meta
          name="description"
          content={strings[locale].portfolioDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <div className={`${styles.portfolioPageContainer} container-fluid`}>
          <header className="row">
            <div className={`${styles.portfolioImageContainer} col-12`}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={'bottom'}
                src={PortfolioHeader}
                alt="Portfolio header featuring fruit and wine"
              />
            </div>
          </header>
          <div className="row">
            <div className={`${styles.portfolioTitleContainer} col-12`}>
              <h1>Portfolios</h1>
            </div>
          </div>
          <main className={`${styles.portfolioSelectors} row`}>
            <div className="col-12 col-lg-3">
              <Link href={'/portfolio/food'}>
                <div
                  className={`${styles.portfolioSelectorContainer} ${styles.foodSelector}`}
                >
                  <h2>{strings[locale].portfolioFood}</h2>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link href={'/portfolio/beverage'}>
                <div
                  className={`${styles.portfolioSelectorContainer} ${styles.beverageSelector}`}
                >
                  <h2>{strings[locale].portfolioBeverage}</h2>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link href={'/portfolio/product'}>
                <div
                  className={`${styles.portfolioSelectorContainer} ${styles.productSelector}`}
                >
                  <h2>{strings[locale].portfolioProduct}</h2>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link href={'/portfolio/video'}>
                <div
                  className={`${styles.portfolioSelectorContainer} ${styles.videoSelector}`}
                >
                  <h2>{strings[locale].portfolioVideo}</h2>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default Portfolio;
