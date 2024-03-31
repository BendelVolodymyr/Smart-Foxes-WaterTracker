import styled from 'styled-components';

import { ReactComponent as CupIcon } from '../../../assets/icons/cup.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

// import theme from '../../../styles/theme';


const TodayBoxWrapper = styled.div`
  display: block;
  width: 100%;
  height: 260px;
`;


const CupSvg = styled(CupIcon)`
  fill: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
  width: 36px;
  height: 36px;
`;

const EditSvg = styled(EditIcon)`
  stroke:  ${({ theme }) => `#${theme.colors.lightTheme.secondary.color3}`};
  width: 16px;
  height: 16px;
`;

const DeleteSvg = styled(DeleteIcon)`
   stroke:  ${({ theme }) => `#${theme.colors.lightTheme.secondary.color2}`};
  width: 16px;
  height: 16px;
`;

const ListButtons = styled.div`
display: flex;

`

const Button = styled.button`
  position: relative;
 background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: green;
    border-radius: 2px;
  }`

const PortionsList = styled.ul`
height: 188px;
overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color3}`};
    border-radius: 20px;
  }
  `

export {
  TodayBoxWrapper,
  CupSvg,
  EditSvg,
  DeleteSvg,
  PortionsList,
  ListButtons,
  Button
}