import React from 'react';
import * as S from './styles';

export type HamburguerProps = {
  onClick?: (e: any) => void;
  open: boolean;
};

const Hamburguer: React.FC<HamburguerProps> = ({ onClick, open }) => {
  return (
    <S.HamburguerContainer onClick={onClick} open={open}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </S.HamburguerContainer>
  );
};

export default Hamburguer;
