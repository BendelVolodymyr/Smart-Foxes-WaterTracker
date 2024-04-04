import styled from 'styled-components';
// import DialogTitle from '@mui/material/DialogTitle';
// import { withStyles } from '@mui/styles';

const PortionDelModalWrapper = styled.div`

width: 232px;
height: 216px;

display: flex;
flex-direction: column;


gap: 24px;

h3{
color: #2F2F2F;
font-size: 26px;
font-weight: 500;
line-height: 1.23;
}

p{
color: #2F2F2F;

font-size: 18px;
font-weight: 500;
line-height: 1.11;
}


@media (min-width: ${({ theme }) => theme.screens.tab}){
    width: 534px;
height: 144px;
}

@media (min-width: ${({ theme }) => theme.screens.tab}){
    width: 534px;
height: 144px;
}
`

const DialogActions = styled.div`
display: flex;
flex-direction: column-reverse;
gap: 24px;

@media (min-width: ${({ theme }) => theme.screens.tab}){
    flex-direction: row;
    justify-content: end;
}
`

const ButtonCns = styled.button`

padding: 8px 30px;


color: #407BFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;

border-radius: 10px;
background:  #D7E3FF;
@media (min-width: ${({ theme }) => theme.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}

`
const ButtonDlt = styled.button`

padding: 8px 30px;


color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;


border-radius: 10px;
background:#EF5050;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

@media (min-width: ${({ theme }) => theme.screens.tab}){
    padding: 10px 30px;
    font-size: 18px;
    width: 160px;
    height: 44px;
}
`

export {
    PortionDelModalWrapper,
    DialogActions,
    ButtonDlt,
    ButtonCns
}