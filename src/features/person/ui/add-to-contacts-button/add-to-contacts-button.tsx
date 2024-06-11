'use client';

import { useIsMobile } from '@/shared/hooks/use-is-mobile';
import { Button } from '@/shared/ui/button';
import { IconWrapper } from '@/shared/ui/icon-wrapper';

import { AddToContactsButtonProps } from './types';

export const AddToContactsButton = ({
  name,
  phone,
  email,
  isDisabled,
}: AddToContactsButtonProps) => {
  const isMobile = useIsMobile();

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
    <>
      {isMobile ? (
        <Button
          onClick={handleClick}
          disabled={isDisabled}
          styleType={'secondary'}
        >
          <IconWrapper iconSrc="./assets/icons/save-contact.svg" size="m">
            сохранить визитку
          </IconWrapper>
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          disabled={isDisabled}
          styleType={'primary'}
          style={{ marginBlockStart: '1rem' }}
        >
          добавить в контакты
        </Button>
      )}
    </>
  );
};
