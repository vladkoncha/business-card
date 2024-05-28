import { useCompanyData } from '@/entities/company';
import { PersonFrame, usePersonData } from '@/entities/person';

import styles from './styles.module.less';

export const BusinessCard = () => {
  const personData = usePersonData();
  const companyData = useCompanyData();

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['buttons-wrapper']}>
        <button>о сотруднике</button>
        <button>о компании</button>
      </div>
      <PersonFrame personData={personData} logoSrc={companyData?.logoSrc} />
    </div>
  );
};
