import { useHeroModel } from "./model";
import { HeroView } from "./view";

const Hero = () => {
  const model = useHeroModel();

  return <HeroView {...model} />;
};

export default Hero;
