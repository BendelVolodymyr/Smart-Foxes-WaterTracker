import styled from 'styled-components';


const PopoverContainer = styled.div`
display: flex;
flex-direction:column;
gap: 16px;
padding: 24px 13px;


border-radius: 10px;
background:${p => p.theme.colors.primary.bg};
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);

`;

const PopoverDate = styled.h2`
color:${p => p.theme.colors.primary.accent};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`;

const StatsList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;

color: ${p => p.theme.colors.primary.text};

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
`;

const StatItem = styled.li`

span{
  color:${p => p.theme.colors.primary.accent};

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


}