import React from 'react';
import * as S from './styles';

export const WavesBackground: React.FC = () => {
  return (
    <S.WavesContainer>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </S.WavesContainer>
  );
};
