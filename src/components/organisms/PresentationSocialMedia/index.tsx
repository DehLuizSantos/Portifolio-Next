import { Button } from '@/components/atomos/Button';
import { SocialMediaIcon } from '@/components/atomos/SocialMediaIcon';
import { FontH2, FontH3 } from '@/styles/fonts';
import * as S from './styles';

export const PresentationSocialMedia = () => {
  const socialMedias = [
    {
      name: 'github',
      icon: '/icons/github.svg',
      link: 'https://github.com/DehLuizSantos',
    },
    {
      name: 'instagram',
      icon: '/icons/instagram.svg',
      link: 'https://www.instagram.com/and_bas7/',
    },
    {
      name: 'linkdn',
      icon: '/icons/linkdn.svg',
      link: 'https://www.linkedin.com/in/andr%C3%A9-luiz-844207102/',
    },
  ];

  return (
    <S.PresentationSocialMediaContainer>
      <S.SocialMediaButton>
        {socialMedias.map((socialMedia, index) => (
          <SocialMediaIcon
            key={index}
            icon={socialMedia.icon}
            link={socialMedia.link}
            name={socialMedia.name}
          />
        ))}
      </S.SocialMediaButton>

      <S.TitlePresentation>
        <FontH2>André Luiz</FontH2>
        <FontH3>Software Develop</FontH3>
        <Button>Download CV</Button>
      </S.TitlePresentation>
    </S.PresentationSocialMediaContainer>
  );
};
