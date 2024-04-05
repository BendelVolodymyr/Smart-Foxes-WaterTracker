import styled from 'styled-components';
// import theme from '../../../styles/theme';

export const UserLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const UserName = styled.p`
  max-width: 166px;
  overflow: auto;
  font-size: 16px;

  font-weight: ${(p) => {
    p.theme.fontWeights.regular;
  }};
  line-height: 20px;
  text-align: right;
  margin-right: 8px;
`;
export const AvatarBox = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  :hover {
    fill: red;
    scale: 110%;
    transform: translateY(1px);
  }
`;
