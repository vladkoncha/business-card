import styles from './styles.module.less';
import { AddToContactsButtonProps } from './types';

export const AddToContactsButton = ({
  name,
  phone,
  email,
  isDisabled,
}: AddToContactsButtonProps) => {
  const handleClick = () => {
    const vcard = `BEGIN:VCARD
VERSION:4.0
FN;CHARSET=UTF-8: ${name}
TEL;TYPE=work,voice:${phone}
EMAIL: ${email}
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = `${name}.vcf`;
    newLink.href = url;

    newLink.click();
  };

  return (
    <button
      className={styles['add-contact-button']}
      onClick={handleClick}
      disabled={isDisabled}
    >
      добавить в контакты
    </button>
  );
};
