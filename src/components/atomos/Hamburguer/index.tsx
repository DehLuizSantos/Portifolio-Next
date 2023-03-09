import React from 'react';
import * as S from './styles';

type HamburguerProps = {
  onClick?: () => void;
};

const Hamburguer: React.FC<HamburguerProps> = ({ onClick }) => {
  return (
    <>
      <S.HamburguerContainer onClick={onClick}>
        <input className="label-check" id="label-check" type="checkbox" />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <label></label>
        </label>
      </S.HamburguerContainer>
    </>
  );
};

export default Hamburguer;
