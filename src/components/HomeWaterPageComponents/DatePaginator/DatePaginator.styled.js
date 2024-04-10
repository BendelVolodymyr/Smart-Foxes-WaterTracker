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
  button > svg {
    
    background: transparent;
    border: none;
    cursor: ${p => (p.disabled ? "default" : "pointer")};
   
    pointer-events: ${p => (p.disabled ? "none" : "auto")};
    
   
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.screens.tab}){

    width: 192px;
  }

`;

const PaginatorBtn = styled.button`
 background: transparent;
    border: none;
    cursor: ${p => (p.disabled ? "default" : "pointer")};
    visibility: ${p => (p.disabled ? "hidden" : "visible")};
    pointer-events: ${p => (p.disabled ? "none" : "auto")};
    margin: 0;

    
    &:hover {
  
    & > svg {
      fill: ${p => p.theme.colors.secondary.color4}; 
    }
  }
`

const PrevSvg = styled(PrevIcon)`

fill: ${p => p.theme.colors.primary.accent};
  width: 14px;
  height: auto;

`


const NextSvg = styled(NextIcon)`

fill: ${p => p.theme.colors.primary.accent};
  width: 14px;
  height: auto;
 `

export {
  Paginator,
  PrevSvg,
  NextSvg,
  PaginatorBtn
}