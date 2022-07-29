import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
//Icons
import MailIcon from '../../public/icons/emailIcon.svg';
import FleuryLogo from '../../public/icons/fpLogo.svg';
import InstagramIcon from '../../public/icons/instagramIcon.svg';
import LinkedInIcon from '../../public/icons/linkedInIcon.svg';
import styles from './navigation.module.scss';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, pathname } = useRouter();

  const mobileMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.container}>
      <div className={`${styles.logoContainer} me-auto`}>
        {pathname === '/' ? (
          <div className={styles.langSwitch}>
            <Link className={styles.langNav} href={'/'} locale={'fr'}>
              <h5 className={locale === 'fr' ? styles.activeLang : ''}>FR</h5>
            </Link>
            <h6>-</h6>
            <Link className={styles.langNav} href={'/'} locale={'en'}>
              <h5 className={locale === 'en' ? styles.activeLang : ''}>EN</h5>
            </Link>
          </div>
        ) : (
          <Link href={'/'}>
            <FleuryLogo />
          </Link>
        )}
      </div>
      <div className={`${styles.mainNavigation} d-none d-md-flex`}>
        <div className={styles.mainNavLinks}>
          <Link className={styles.mainNavItem} href={'/portfolio'}>
            PORTFOLIO
          </Link>
          <Link className={styles.mainNavItem} href={'/about'}>
            ABOUT
          </Link>
          <Link className={styles.mainNavItem} href={'/contact'}>
            CONTACT
          </Link>
        </div>
        <div className={styles.socialNav}>
          <a
            href="mailto:julien@fleuryphotography.com"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <MailIcon />
            </div>
          </a>
          <a
            href="https://www.instagram.com/fleuryphotography/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <InstagramIcon />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/julienfleuryphoto/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <LinkedInIcon />
            </div>
          </a>
        </div>
      </div>
      <div className={`${styles.mobileNavigation} d-flex d-md-none`}>
        <div className={styles.mobileSocialNav}>
          <a
            href="mailto:julien@fleuryphotography.com"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <MailIcon />
            </div>
          </a>
          <a
            href="https://www.instagram.com/fleuryphotography/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <InstagramIcon />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/julienfleuryphoto/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className={styles.socialIconContainer}>
              <LinkedInIcon />
            </div>
          </a>
        </div>
        <div className={styles.mobileNavMenuContainer}>
          <div className={styles.burgerMenuContainer}>
            <div
              onClick={mobileMenuClick}
              className={`${menuOpen ? styles.open : ''} ${styles.burgerMenu}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`${menuOpen ? 'd-flex' : 'd-none'} ${
              styles.mobileNavLinks
            }`}
          >
            <Link className={styles.mobileNavItem} href={'/portfolio'}>
              PORTFOLIO
            </Link>
            <Link className={styles.mobileNavItem} href={'/about'}>
              ABOUT
            </Link>
            <Link className={styles.mobileNavItem} href={'/contact'}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
