import { FontH1 } from '@/styles/fonts';
import Head from 'next/head';
import Image from 'next/image';
import * as S from './styles';

export const PresentationPhoto = () => {
  return (
    <S.PresentationPhotoContainer>
      <S.ContainerTitle>
        <FontH1>Developing with love, you get where you want</FontH1>
      </S.ContainerTitle>

      <S.ContainerPhoto>
        <Image
          src="/presentationPhoto.png"
          alt="André Luiz Santos"
          width={'284px'}
          height={'346px'}
        />
      </S.ContainerPhoto>
    </S.PresentationPhotoContainer>
  );
};
