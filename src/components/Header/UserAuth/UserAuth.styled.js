import styled from 'styled-components';
import theme from '../../../styles/theme';

export const UserAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #407bff;
  /* color: ; */

  @media screen and (min-width: 768px) {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
// .user {
//   display: flex;
//   align-items: center;
//   gap: 8px;
// }

// .user_avatar {
//   width: 28px;
//   height: 28px;
//   border: 1px solid black;
//   border-radius: 50%;
// }
