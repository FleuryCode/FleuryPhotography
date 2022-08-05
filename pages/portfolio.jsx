import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../layouts/primaryLayout/primaryLayout.component';
import styles from '../styles/portfolio.module.scss';
import { strings } from '../translations';

const Portfolio = () => {
  const { locale } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].contactTitle}</title>
        <meta name="description" content={strings[locale].contactDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <div className="portfolioPageContainer container-fluid">
          <header className="row">
            <div className="col-12 portfolioImageContainer">
              <Image
                layout="fill"
                src={PortfolioHeader}
                alt="Portfolio header featuring fruit and wine"
              />
            </div>
          </header>
          <div className="row">
            <div className="col-12 portfolioTitleContainer">
              <h1>Portfolios</h1>
            </div>
          </div>
          <main className="row portfolioSelectors">
            <div className="col-12 col-lg-3">
              <Link
                href={'/'}
                className="portfolioSelectorContainer foodSelector"
              >
                <h2>{'Food'}</h2>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link
                href={'/'}
                className="portfolioSelectorContainer beverageSelector"
              >
                <h2>{'Beverage'}</h2>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link
                href={'/'}
                className="portfolioSelectorContainer productSelector"
              >
                <h2>{'Product'}</h2>
              </Link>
            </div>
            <div className="col-12 col-lg-3">
              <Link
                href={'/'}
                className="portfolioSelectorContainer videoSelector"
              >
                <h2>{'Video'}</h2>
              </Link>
            </div>
          </main>
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default Portfolio;
