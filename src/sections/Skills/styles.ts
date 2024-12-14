import styled from "@emotion/styled";

export const SkillSectionContainer = styled.section`
  display: grid;
  /* height: 350px; */
  justify-items: center;
  align-content: center;
  overflow-x: scroll;
  grid-template-columns: repeat(9, 350px);
`;

interface SkillProps {
  height: string;
  width: string;
}
export const Skill = styled.div<SkillProps>`
  width: ${(_) => _.width};
  height: ${(_) => _.height};
  border: 1px solid black;
  padding: 30px 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const SkillTitle = styled.h4`
  font-size: 2em;
  text-align: center;
`;

interface SkillIconProps {
  size: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
}

export const SkillIcon = styled.figure<SkillIconProps>`
  font-size: ${(_) => _.fontSize};
  margin: 0 auto;
  color: ${(_) => _.color};
  background-color: ${(_) => _.backgroundColor};
  border: 1px solid black;
  width: ${(_) => _.size};
  height: ${(_) => _.size};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillText = styled.p`
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
`;

export const SkillProficiency = styled.p`
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;
