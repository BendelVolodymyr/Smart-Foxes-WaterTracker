import styled from 'styled-components';

const TodayEditModalWrapper = styled.div`
width: 100%;
min-height: 600px;

@media (min-width: ${({ theme }) => theme.screens.tab}){
    height: 516px;
}

@media (min-width: ${({ theme }) => theme.screens.desk}){
    width: 524px;
    
}
`

export {
    TodayEditModalWrapper
}