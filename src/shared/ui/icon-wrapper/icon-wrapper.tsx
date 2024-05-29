import styles from './styles.module.less';
import { IconWrapperProps } from './types';

export const IconWrapper = ({ iconSrc, children }: IconWrapperProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={iconSrc} alt="" />
      {children}
    </div>
  );
};
