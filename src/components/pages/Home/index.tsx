import { PresentationPhoto } from '@/components/molecules/PresentationPhoto';
import { PresentationSocialMedia } from '@/components/molecules/PresentationSocialMedia';
import Head from 'next/head';
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Portifolio André Home</title>
        <meta name="description" content="Portifólio André Developer" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <S.HomeContainer>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <PresentationPhoto />
        <PresentationSocialMedia />
      </S.HomeContainer>
    </>
  );
};
