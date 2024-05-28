import styles from './styles.module.less';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.skeleton}></span>
    </div>
  );
};
