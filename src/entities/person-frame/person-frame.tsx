import styles from './styles.module.less';
import { PersonImage } from './ui/person-image';

export const PersonFrame = () => {
  return (
    <div className={styles['person-frame-wrapper']}>
      <div className={styles['image-contact-wrapper']}>
        <PersonImage src="src/assets/person.jpg" />
        <button>добавить в контакты</button>
      </div>
    </div>
  );
};
