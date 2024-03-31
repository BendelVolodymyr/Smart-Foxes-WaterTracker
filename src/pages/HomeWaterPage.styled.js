import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction:column;

align-items: center;

@media (min-width: ${({ theme }) => theme.screens.tab}) {
    flex-direction:row;
    align-items: flex-start;
  }
`;
const LeftBoxWrapper = styled.div`//змінити, коли буде контекст
display: flex;
flex-direction: column;

width: 280px;
height: 200px;

`;

const RightBoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

border-radius: 10px;
background: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color1}`};
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

width: 280px;
height: 680px;
padding: 24px 8px;
margin: 0;
`;


export {
  RightBoxWrapper,
  LeftBoxWrapper,
  HomePageContainer
}