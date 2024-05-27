import { BusinessCard } from '@/widgets/business-card';

import styles from './styles.module.less';

export const HomePage = () => {
  return (
    <div className={styles['business-card-wrapper']}>
      <BusinessCard />
    </div>
  );
};
