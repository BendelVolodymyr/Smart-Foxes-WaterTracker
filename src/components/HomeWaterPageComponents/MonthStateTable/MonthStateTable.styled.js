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



export {

  MonthComponentWrapper,
  PaginatorBlock
}