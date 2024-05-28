import { useState } from 'react';

import { Loader } from '@/shared/ui/loader';

import styles from './styles.module.less';
import { PersonImageProps } from './types';

export const PersonImage = ({ src }: PersonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles['image-wrapper']}>
      {isLoading && <Loader />}

      <img
        className={styles.image}
        src={src}
        alt=""
        onLoad={handleImageLoad}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      />
    </div>
  );
};
