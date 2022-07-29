import Navigation from '../../components/navigation/navigation.component';
import styles from './primaryLayout.module.scss';

const PrimaryLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <div className={styles.mainContainer}>{children}</div>
    </div>
  );
};

export default PrimaryLayout;
