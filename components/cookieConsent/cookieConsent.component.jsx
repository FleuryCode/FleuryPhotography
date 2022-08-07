import { hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import styles from './cookieConsent.module.scss';

const CookieConsent = () => {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`${styles.bannerContainer} ${consent ? styles.hidden : ''}`}
    >
      <div className={styles.mainContainer}>
        <p>This website uses cookies</p>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className={styles.acceptButton}
        >
          Accept
        </button>
        <button onClick={(e) => denyCookie()} className={styles.denyButton}>
          Deny
        </button>
        <button
          className={styles.closeButton}
          onClick={(e) => {
            closeP();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default CookieConsent;
