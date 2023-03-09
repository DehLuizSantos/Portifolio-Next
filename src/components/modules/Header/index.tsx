import React, { useRef } from 'react';
import * as S from './styles';
import Logo from '/public/Logo.svg';
import Image from 'next/image';
import Hamburguer from '@/components/atomos/Hamburguer';
import { motion, useCycle } from 'framer-motion';
import { Navigation } from '@/components/atomos/Navigation';
import { useDimensions } from './dimencions';
import { headerList } from './mocks';

const Header: React.FC = () => {
  const [open, setOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <S.ContainerHeader>
      <Image src={Logo} alt={'logo'} />
      <motion.nav
        initial={false}
        animate={open ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Hamburguer setOpen={() => setOpen()} />

        <Navigation open={open} />
      </motion.nav>

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
