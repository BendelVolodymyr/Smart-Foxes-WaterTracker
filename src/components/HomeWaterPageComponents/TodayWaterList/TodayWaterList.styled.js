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
 background: none;
  border: none;
  padding: 0;
  cursor: pointer;`

export {
  TodayBoxWrapper,
  CupSvg,
  EditSvg,
  DeleteSvg,
  ListButtons,
  Button
}