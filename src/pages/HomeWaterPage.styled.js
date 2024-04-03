import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction:column;

align-items: center;
color:${p => p.theme.colors.primary.text};




@media (min-width: ${({ theme }) => theme.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
  }
`;

//змінити, коли буде контекст
const LeftBoxWrapper = styled.div`
display: flex;
flex-direction: column;

width: 280px;
height: 200px;


@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
}

`;

const RightBoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

border-radius: 10px;
background: ${p => p.theme.colors.secondary.color1};
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

width: 280px;
height:auto;
padding: 24px 8px;
margin: 0;


@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
  padding: 32px 24px;
}

@media (min-width: ${({ theme }) => theme.screens.desk}) {
  width: 592px;
  
}


`;


export {
  RightBoxWrapper,
  LeftBoxWrapper,
  HomePageContainer
}