import React, { useState } from 'react';
import * as S from './styles';
import Logo from '/public/Logo.svg';
import Image from 'next/image';
import Hamburguer from '@/components/atomos/Hamburguer';
import MenuOpen from '@/components/atomos/MenuOpen';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const headerList = [
    {
      item: 'Home',
      src: '/',
    },
    {
      item: 'About',
      src: '/',
    },
    {
      item: 'Projects',
      src: '/',
    },
    {
      item: 'Blog',
      src: '/',
    },
  ];
  return (
    <S.ContainerHeader>
      <Image src={Logo} alt={'logo'} />
      <Hamburguer onClick={() => setOpen(!open)} />

      <MenuOpen open={open} />

      <S.ListItems>
        {headerList.map((item, index) => (
          <a href={item.src} key={index}>
            <li>{item.item}</li>
          </a>
        ))}
      </S.ListItems>
    </S.ContainerHeader>
  );
};

export default Header;
