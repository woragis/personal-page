import { useHeroModel } from "./model";
import { NameTitle } from "./styles";

export const HeroView = ({}: ReturnType<typeof useHeroModel>) => {
  return (
    <div>
      HeroView
      <NameTitle>Jezreel de Andrade</NameTitle>
    </div>
  );
};
