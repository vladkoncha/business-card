import clsx from 'clsx';

import styles from './styles.module.less';
import { IconWrapperProps } from './types';

export const IconWrapper = ({
  iconSrc,
  size = 's',
  children,
}: IconWrapperProps) => {
  return (
    <div className={styles.container}>
      <img className={clsx(styles.icon, styles[size])} src={iconSrc} alt="" />
      {children}
    </div>
  );
};
