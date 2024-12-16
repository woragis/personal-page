import styled from "@emotion/styled";

export const HeroContainer = styled.section`
  min-height: calc(100vh);
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(2px) brightness(0.2);
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  gap: 50px;
  min-height: 300px;
  border: 1px solid lime;
`;

export const HeroTextContainer = styled.article`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroImageContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const NameTitle = styled.h1`
  font-family: "Goldman", sans-serif;
  font-weight: 700;
  font-style: normal;
`;
