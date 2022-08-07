import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import PrimaryLayout from '../../layouts/primaryLayout/primaryLayout.component';
import VideoHeader from '../../public/images/videoPortfolioHeader.jpg';
import styles from '../../styles/specificPortfolio.module.scss';
import { strings } from '../../translations';
const Beverage = () => {
  const { locale } = useRouter();
  const videoOpts = {
    height: '500px',
    width: '100%',
    playersVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].videoTitle}</title>
        <meta name="description" content={strings[locale].videoDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <div
          className={`${styles.specificPortfolioPageContainer} container-fluid`}
        >
          <div className="row">
            <div className={`col-12 ${styles.specificImageContainer}`}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={'bottom'}
                src={VideoHeader}
                alt={`Header for video portfolio`}
              />
            </div>
          </div>
          <div className="row">
            <div className={`col-12 ${styles.specificTitleContainer}`}>
              <h1>{strings[locale].portfolioVideo}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <YouTube
                className={styles.youtubePortfolio}
                videoId="yu1sI0thaUc"
                opts={videoOpts}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <YouTube
                className={styles.youtubePortfolio}
                videoId="y3NTYxJU9yc"
                opts={videoOpts}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <YouTube
                className={styles.youtubePortfolio}
                videoId="Mbqt96crGyE"
                opts={videoOpts}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <YouTube
                className={styles.youtubePortfolio}
                videoId="fJGX45hNf8g"
                opts={videoOpts}
              />
            </div>
          </div>
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default Beverage;
