import React, { useRef } from 'react';
import * as S from './styles';

type MenuOpenProps = {
  open: boolean;
};

const MenuOpen: React.FC<MenuOpenProps> = ({ open }) => {
  return (
    <>
      <S.MenuOpenContainer open={open}>
        <p>Menu Aberto</p>
      </S.MenuOpenContainer>
    </>
  );
};

export default MenuOpen;
