import styled from 'styled-components';

export const UserAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  color: ${(p) => p.theme.colors.primary.accent};

  @media screen and (min-width: 768px) {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
