import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ImagePortfolio from '../../components/imagePortfolio/imagePortfolio.component';
import PrimaryLayout from '../../layouts/primaryLayout/primaryLayout.component';
import BeverageHeader from '../../public/images/beveragePortfolioHeader.jpg';
import { BeverageImages } from '../../public/portfolioImages/ImageArrays';
import styles from '../../styles/specificPortfolio.module.scss';
import { strings } from '../../translations';
const Beverage = () => {
  const { locale } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].beverageTitle}</title>
        <meta
          name="description"
          content={strings[locale].beverageDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <main
          className={`${styles.specificPortfolioPageContainer} container-fluid`}
        >
          <div className="row">
            <div className={`col-12 ${styles.specificImageContainer}`}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={'bottom'}
                src={BeverageHeader}
                alt={`Header for beverage portfolio`}
              />
            </div>
          </div>
          <div className="row">
            <div className={`col-12 ${styles.specificTitleContainer}`}>
              <h1>{strings[locale].portfolioBeverage}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ImagePortfolio imagePortfolio={BeverageImages} />
            </div>
          </div>
        </main>
      </PrimaryLayout>
    </div>
  );
};

export default Beverage;
