import Link from 'next/link';
import { useRouter } from 'next/router';
import { strings } from '../../translations';
import styles from './footer.module.scss';

const Footer = () => {
  const { locale } = useRouter();
  return (
    <footer className={`${styles.container} container-fluid`}>
      <div className="row">
        <div className="col-12">
          <nav className={styles.footerNav}>
            <Link href={'/'}>Home</Link>
            <Link href={'/portfolio'}>Portfolio</Link>
            <Link href={'/about'}>{strings[locale].footerAbout}</Link>
            <Link href={'/contact'}>Contact</Link>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-3">
          <p>&copy; Copyright Fleury Photography 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
