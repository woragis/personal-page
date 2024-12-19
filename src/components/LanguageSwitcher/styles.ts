import styled from "@emotion/styled";

export const LanguageSwitcherContainer = styled.div`
  display: inline-block;
  border: 1px solid red;
  position: relative;
`;

export const LanguagesContainer = styled.div`
  position: absolute;
  height: 100px;
  width: fit-content;
  bottom: -100px;
  right: 100%;
`;

export const LanguageButton = styled.button`
  padding: 10px;
  margin: 0 25px;
  width: 100%;
`;

export const Language = styled.p`
  border: 1px solid black;
  width: auto;
`;
