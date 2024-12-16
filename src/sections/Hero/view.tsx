import { useHeroModel } from "./model";
import {
  HeroBackgroundImage,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroTextContainer,
  NameTitle,
} from "./styles";

export const HeroView = ({
  heroBackgroundImage,
}: ReturnType<typeof useHeroModel>) => {
  return (
    <HeroContainer>
      <HeroBackgroundImage src={heroBackgroundImage} />
      <HeroContent>
        <HeroTextContainer>
          <NameTitle>Jezreel de Andrade</NameTitle>
        </HeroTextContainer>
        <HeroImageContainer>
          <HeroImage />
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};
