import { FontH3 } from '@/styles/fonts';
import Image from 'next/image';
import * as S from './styles';

export const PresentationPhoto = () => {
  return (
    <S.PresentationPhotoContainer>
      <S.ContainerPhoto>
        <Image
          src="/presentationPhoto.png"
          alt="André Luiz Santos"
          width={'284px'}
          height={'325px'}
        />
      </S.ContainerPhoto>
      <S.ContainerTitle>
        <FontH3>The only way to do great work is </FontH3>
        <FontH3>to love what you do</FontH3>
      </S.ContainerTitle>
    </S.PresentationPhotoContainer>
  );
};
