import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';

type SocialMediaIconProps = {
  name: string;
  icon: string;
  link: string;
};

export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  link,
  name,
}) => {
  return (
    <S.SocialMediaIconContainer>
      <Link href={link} passHref>
        <a>
          <Image src={icon} alt={name} width={20} height={20} />
        </a>
      </Link>
    </S.SocialMediaIconContainer>
  );
};
