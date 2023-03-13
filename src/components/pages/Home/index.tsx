import { PresentationPhoto } from '@/components/molecules/PresentationPhoto';
import { PresentationSocialMedia } from '@/components/organisms/PresentationSocialMedia';
import { WavesBackground } from '@/components/molecules/WavesBackground';
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
        <div className="presentation">
          <PresentationPhoto />
          <PresentationSocialMedia />
        </div>
        <WavesBackground />
      </S.HomeContainer>
    </>
  );
};
