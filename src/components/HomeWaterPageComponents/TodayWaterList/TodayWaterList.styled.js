import styled from 'styled-components';

import { ReactComponent as GlassIcon } from '../../../assets/iconsDayList/glass_26.svg';
import { ReactComponent as EditIcon } from '../../../assets/iconsDayList/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/iconsDayList/delete.svg';

import { ReactComponent as PlusIcon } from '../../../assets/iconsDayList/plus.svg';


const TodayBoxWrapper = styled.div`
  
  width: 100%;
  height: 260px;

  h2{
   

font-size: 24px;

font-weight: 500;
line-height: 1.25; 
margin-bottom: 9px;
  }

 
`;


const PortionsList = styled.ul`
height: 188px;
overflow: auto;


li {
    display:flex;
  margin:0;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => `#${theme.colors.lightTheme.secondary.color5}`};

    
  }
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
const ListContext = styled.div`
display:flex;
align-items: center;
gap:12px;

font-size: 12px;
font-weight: 400;
line-height: 2;

`

const Portion = styled.span`
color:${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};

font-size: 18px;

font-weight: 400;
line-height: 1.33;
`



const GlassSvg = styled(GlassIcon)`
  fill: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
  width: 26px;
  height: auto;
  
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
gap:18px;
align-items:center;
margin-left:auto;
margin-right:4px;
 button {
  margin-bottom:0px;

  position: relative;


  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 1px;
  }
 }

`

const ButtonEdit = styled.button`

  &:hover::after {
   
    background-color:  ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
   
  }`



const ButtonDelete = styled.button`
 
  cursor: pointer;
  &:hover::after {
   
    background-color:  ${({ theme }) => `#${theme.colors.lightTheme.secondary.color2}`};
    
  }`

const PlusSvg = styled(PlusIcon)`
  fill: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
  stroke: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
  width: 16px;
  height: 16px;
 
`;

const AddWaterBtn = styled.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};

margin-bottom:24px;
&:hover {
    color: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color4}`};
    ${PlusSvg} {
      fill: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color4}`};
      stroke: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color4}`};
    }
  }
`





export {
  TodayBoxWrapper,
  GlassSvg,
  EditSvg,
  DeleteSvg,
  PortionsList,
  ListContext,
  ListButtons,
  ButtonEdit,
  Portion,
  PlusSvg,
  AddWaterBtn,
  ButtonDelete
}