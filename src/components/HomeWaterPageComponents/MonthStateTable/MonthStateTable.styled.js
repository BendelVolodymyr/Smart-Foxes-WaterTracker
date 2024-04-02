import styled from 'styled-components';


const MonthComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


//----------PaginatorBlock------------//

const PaginatorBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:16px;


 h3{
  font-size: 24px;
font-weight: 500;
line-height: 1.25;
 }

 @media (min-width: ${({ theme }) => theme.screens.tab}){
 

 h3{
  font-size: 26px;

line-height: 1.23;
 }
 }
 
`;

//----------DaysBlock------------//

// const DaysGrid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(10, 34px);
//   gap: 36px 26px;
//   list-style: none;
//   padding: 0;
//   font-size: 16px;
//   justify-content: space-between;


//   @media (min-width: ${({ theme }) => theme.screens.tab}){

//     gap: 44px 34px;
//   }


// `;

// const DayCell = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   cursor: pointer;
// `;

// const DayCircle = styled.div`
//   width: 34px;
//   height: 34px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ isToday }) => (isToday ? 'lightblue' : 'white')};
//   border: 2px solid
//     ${({ percentage }) => (percentage < 100 ? 'red' : 'transparent')};
// `;

// const DayNumber = styled.p`
//   z-index: 1;
//   margin: 0;
// `;

// const DayPercentage = styled.p`
//   position: absolute;
//   bottom: -21px;
//   z-index: 0;
//   margin: 0;
//   font-size: 10px;
// font-style: normal;
// font-weight: 400;
// line-height: 1.6;
//   color: ${p => p.theme.colors.secondary.color4};

//   @media (min-width: ${({ theme }) => theme.screens.tab}) {
//     font-size: 13px;

// line-height: 1.53;
//   }

// `;


export {
  // DayCell,
  // DayCircle,
  // DayNumber,
  // DayPercentage,
  // DaysGrid,
  MonthComponentWrapper,
  PaginatorBlock
}