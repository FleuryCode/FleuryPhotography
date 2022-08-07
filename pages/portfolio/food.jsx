import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ImagePortfolio from '../../components/imagePortfolio/imagePortfolio.component';
import PrimaryLayout from '../../layouts/primaryLayout/primaryLayout.component';
import FoodHeader from '../../public/images/foodPortfolioHeader.jpg';
import { FoodImages } from '../../public/portfolioImages/ImageArrays';
import styles from '../../styles/specificPortfolio.module.scss';
import { strings } from '../../translations';
const Food = () => {
  const { locale } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].foodTitle}</title>
        <meta name="description" content={strings[locale].foodDescription} />
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
                src={FoodHeader}
                alt={`Header for food portfolio`}
              />
            </div>
          </div>
          <div className="row">
            <div className={`col-12 ${styles.specificTitleContainer}`}>
              <h1>{strings[locale].portfolioFood}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ImagePortfolio imagePortfolio={FoodImages} />
            </div>
          </div>
        </main>
      </PrimaryLayout>
    </div>
  );
};

export default Food;
