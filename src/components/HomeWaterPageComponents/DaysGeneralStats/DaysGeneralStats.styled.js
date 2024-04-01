
import { Popover } from '@mui/material';
import styled from 'styled-components';



const PopoverContainer = styled.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background: ${({ theme }) => `#${theme.colors.lightTheme.primary.bg}`};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);



`;


// const PopoverStyled = styled(Popover)`
//   @media (max-width: 780px) {
//     width: 280px;
//     margin-left: auto;
//     margin-right:auto;
//     .MuiBackdrop-root {

//     }
//     .MuiPaper-root.MuiPopover-paper {
//       width: 100%;
//       left: 50%;
//       transform: translateX(-50%);
//     }
//   }
// `;

const PopoverDate = styled.h2`
color: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`;

const StatsList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${({ theme }) => `#${theme.colors.lightTheme.primary.text}`};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`;

const StatItem = styled.li`

span{
  color:${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};

  font-size: 18px;

  font-weight: 500;
  line-height: 1.33;
}

`;


export {
  PopoverContainer,
  PopoverDate,
  StatsList,
  StatItem,
  // PopoverStyled

}