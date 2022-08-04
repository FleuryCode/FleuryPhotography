import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import PrimaryLayout from '../layouts/primaryLayout/primaryLayout.component';
import AboutHeader from '../public/images/aboutHeader.png';
import JFleuryProfile from '../public/images/jfleuryProfile.jpg';
import styles from '../styles/about.module.scss';
import { strings } from '../translations';

const About = () => {
  const { locale } = useRouter();
  const videoOpts = {
    height: '700px',
    width: '100%',
    playersVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{strings[locale].aboutTitle}</title>
        <meta name="description" content={strings[locale].aboutDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <div className={`${styles.aboutPageContainer} container-fluid`}>
          <header className="row">
            <div className={`${styles.aboutImageContainer} col-12`}>
              <Image
                layout="fill"
                objectFit="cover"
                src={AboutHeader}
                alt="Tea set header"
                objectPosition={'bottom'}
              />
            </div>
          </header>
          <div className="row">
            <div className={`${styles.aboutTitleContainer} col-12`}>
              <h1>{strings[locale].aboutHeader}</h1>
            </div>
          </div>
          <main className="row">
            <div
              className={`${styles.aboutTextContainer} col-12 col-md-8 p-4 p-md-3`}
            >
              <h4>{strings[locale].aboutInfoOne}</h4>
              <br />
              <br />
              <h4>{strings[locale].aboutInfoTwo}</h4>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.profilePictureContainer}>
                <Image
                  src={JFleuryProfile}
                  alt="Profile of photographer Julien Fleury"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={`${styles.clientInfo} container`}>
                <div className="row">
                  <div className="col-12">
                    <h2>{strings[locale].aboutClientList}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex flex-column">
                    <a
                      href="https://perryssteakhouse.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Perry&#39;s Steakhouse
                    </a>
                    <a
                      href="https://amysicecreams.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Amy&#39;s Ice Creams
                    </a>
                    <a
                      href="https://www.lepotagerdecharlotte.fr/en/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Le Potager de Charlotte
                    </a>
                    <a
                      href="https://beersonpink.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Beers on Pink
                    </a>
                    <a
                      href="https://cypressgrill.net/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Cypress Grill
                    </a>
                    <a
                      href="https://www.theaustinwinery.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - The Austin Winery
                    </a>
                    <a
                      href="https://www.elianabernard.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Eliana Bernard Ceramics
                    </a>
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column">
                    <a
                      href="https://carveamericangrille.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - CARVE
                    </a>
                    <a
                      href="https://www.hopsandgrain.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Hops &amp; Grains
                    </a>
                    <a
                      href="https://www.ottobock.com/en-us/homepage"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Ottobock
                    </a>
                    <a
                      href="https://512brewing.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - 512 Brewing
                    </a>
                    <a
                      href="https://www.ora.organic/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - Ora Organic
                    </a>
                    <a
                      href="https://www.therosesempire.com/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      - The Roses Empire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="row">
            <div className="col-12 p-3">
              <YouTube
                className={styles.videoContainer}
                videoId="qJl6OHd0sUM"
                opts={videoOpts}
              />
            </div>
          </div>
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default About;
