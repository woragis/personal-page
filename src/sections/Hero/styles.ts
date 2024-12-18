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
  filter: brightness(0.2);
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  column-gap: clamp(50px, 8vw, 100px);
  width: clamp(300px, 80vw, 1200px);
  margin-top: 90px;
  height: clamp(200px, 90vh, 1200px);
`;

export const HeroTextContainer = styled.article`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const HeroImageContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: clamp(200px, 70vh, 500px);
`;

export const HeroImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const NameTitle = styled.h1`
  font-family: "Goldman", sans-serif;
  font-weight: 700;
  font-style: normal;
`;
