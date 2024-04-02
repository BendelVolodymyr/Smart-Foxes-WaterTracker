import styled from 'styled-components';

import { ReactComponent as GlassIcon } from '../../../assets/iconsDayList/glass_26.svg';
import { ReactComponent as EditIcon } from '../../../assets/iconsDayList/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/iconsDayList/delete.svg';

import { ReactComponent as PlusIcon } from '../../../assets/iconsDayList/plus.svg';


const TodayBoxWrapper = styled.div`
  
  width: 100%;
  height: 260px;
  margin-bottom:24px;

  h3{
   

font-size: 24px;

font-weight: 500;
line-height: 1.25; 
margin-bottom: 9px;
  }



  @media (min-width: ${({ theme }) => theme.screens.tab}){

    h3{

   font-size: 26px;
   line-height: 1.23; 
   margin-bottom: 12px;
     }

  }
 
`;


const PortionsList = styled.ul`
height: 188px;
overflow: auto;
margin-bottom:12px;


li {
    display:flex;
  margin:0;
  padding: 12px 0;
  border-bottom: 1px solid ${p => p.theme.colors.secondary.color5};

    
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.secondary.color3};
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



@media (min-width: ${({ theme }) => theme.screens.tab}){

  
  & > :last-child {
      margin-left: auto;
    }
  }

`

const Portion = styled.span`
color:${p => p.theme.colors.primary.accent};


font-size: 18px;

font-weight: 400;
line-height: 1.33;
`



const GlassSvg = styled(GlassIcon)`
  fill:${p => p.theme.colors.primary.accent};
  width: 26px;
  height: auto;


  @media (min-width: ${({ theme }) => theme.screens.tab}){
    width: 36px;
  }
  
`;

const EditSvg = styled(EditIcon)`
  stroke:  ${p => p.theme.colors.secondary.color3};
  width: 16px;
  height: 16px;
`;

const DeleteSvg = styled(DeleteIcon)`
   stroke: ${p => p.theme.colors.secondary.color2};
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
height: 16px;
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
   
    background-color: ${p => p.theme.colors.primary.accent};
   
  }`



const ButtonDelete = styled.button`
 
 
  &:hover::after {
   
    background-color:  ${p => p.theme.colors.secondary.color2};
    
  }`

const PlusSvg = styled(PlusIcon)`
  fill: ${p => p.theme.colors.primary.accent};
  stroke: ${p => p.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({ theme }) => theme.screens.tab}){
    width: 24px;
  height: 24px;
  }
 
`;

const AddWaterBtn = styled.button`
display: flex;
align-items: center;
gap: 8px;

font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${p => p.theme.colors.primary.accent};


&:hover {
    color: ${p => p.theme.colors.secondary.color4};
    ${PlusSvg} {
      fill: ${p => p.theme.colors.secondary.color4};
      stroke: ${p => p.theme.colors.secondary.color4};
  }
}


@media (min-width: ${({ theme }) => theme.screens.tab}){
  font-size: 18px;
line-height: 1.33;
  }

`;





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