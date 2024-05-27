import { PersonFrame } from '@/entities/person-frame';

import styles from './styles.module.less';

export const BusinessCard = () => {
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['buttons-wrapper']}>
        <button>о сотруднике</button>
        <button>о компании</button>
      </div>
      <PersonFrame />
    </div>
  );
};
