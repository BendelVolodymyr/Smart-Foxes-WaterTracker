
import styled from 'styled-components';

const DaysGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 32px);//
  gap: 26px 16px;//
  list-style: none;
  padding: 0;
  font-size: 14px;//
  justify-content: space-between;
`;

const DayCell = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ContactListStyling = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontSize: '18px',


  };
});
const DayCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isToday }) => (isToday ? 'lightblue' : 'white')};
  border: 2px solid
    ${({ percentage }) => (percentage < 100 ? 'red' : 'transparent')};

`;

const DayNumber = styled.p`
z-index: 1;
margin: 0;
`;

const DayPercentage = styled.p`
position: absolute;
bottom: -21px;
z-index: 0;
margin: 0;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
color: #9ebbff;
`;


export {
  DayCell,
  DayCircle,
  DayNumber,
  DayPercentage,
  DaysGrid,

}