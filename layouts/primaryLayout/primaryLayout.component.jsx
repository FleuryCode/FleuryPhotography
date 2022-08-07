import { useRouter } from 'next/router';
import CookieConsent from '../../components/cookieConsent/cookieConsent.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';
import styles from './primaryLayout.module.scss';

const PrimaryLayout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <div className={styles.mainContainer}>{children}</div>
      {pathname !== '/' ? (
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      ) : (
        <div></div>
      )}
      <CookieConsent />
    </div>
  );
};

export default PrimaryLayout;
