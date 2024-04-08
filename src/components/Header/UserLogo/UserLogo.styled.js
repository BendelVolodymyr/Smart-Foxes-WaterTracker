import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const UserName = styled.p`
  max-width: 166px;
  overflow: auto;
  font-size: 16px;

  font-weight: 500;
  line-height: 20px;
  text-align: right;
  margin-right: 8px;

  color: ${(p) => p.theme.colors.primary.text};
`;
export const AvatarBox = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid ${(p) => p.theme.colors.primary.text};
  border-radius: 50%;
  margin-right: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Span = styled.span`
  font-weight: 500;
  color: ${(p) => p.theme.colors.primary.text};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  fill: ${(p) => p.theme.colors.primary.text};
  :hover {
    scale: 110%;
    transform: translateY(1px);
  }
`;
