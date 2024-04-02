import styled from 'styled-components';

import { ReactComponent as PrevIcon } from "../../../assets/iconsDayList/solidleft.svg"

import { ReactComponent as NextIcon } from "../../../assets/iconsDayList/solid-right.svg"



const Paginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:12px;
  width: 156px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
 
  color: ${p => p.theme.colors.primary.accent};
  button {
    
    background: transparent;
    border: none;
    cursor: pointer;
   
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.screens.tab}){

    width: 192px;
  }

`;

const PrevSvg = styled(PrevIcon)`

fill: ${p => (p.disabled ? p.theme.colors.primary.bg : p.theme.colors.primary.accent)};
  width: 14px;
  height: auto;


`
const NextSvg = styled(NextIcon)`

fill: ${p => (p.disabled ? p.theme.colors.primary.bg : p.theme.colors.primary.accent)};
  width: 14px;
  height: auto;


`



export {
  Paginator,
  PrevSvg,
  NextSvg
}