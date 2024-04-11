import styled from 'styled-components';


const DaysGrid = styled.ul`
  display: grid;
  justify-content: space-between;
  align-content: start;
  grid-template-columns: repeat(auto-fill, 32px);
  gap: 16px 26px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  min-height: 476px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    grid-template-columns: repeat(auto-fill, 34px);
    gap: 20px 34px;

    font-size: 16px;
    line-height: 1.25;

    min-height: 292px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    gap: 20px 22px;
  }
`;

const DayCell = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
  }
`;

const DayCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${(p) => (p.$istoday === "true" ? 'hsl(39deg 100% 68% / 23%);' : p.theme.colors.primary.bg)};
  border: 2px solid
    ${({ theme, $percentage }) =>
    $percentage < 100
      ? theme.colors.secondary.color4
      : theme.colors.primary.bg};


`;

const DayNumber = styled.p`
  z-index: 1;
  margin: 0;
`;


const DayPercentage = styled.p`
  margin: 0;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  color: ${p => p.theme.colors.secondary.color3};

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    font-size: 13px;
    line-height: 1.53;
  }
`;

export { DayCell, DayCircle, DayNumber, DayPercentage, DaysGrid };
