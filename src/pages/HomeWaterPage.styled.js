import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
`;
const LeftBoxWrapper = styled.div`
display: flex;
flex-direction: column;

width: 592px;
height: 680px;
padding: 32px 24px;
`;

const RightBoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 592px;
height: 680px;
padding: 32px 24px;
`;


export {
    RightBoxWrapper,
    LeftBoxWrapper,
    HomePageContainer
}