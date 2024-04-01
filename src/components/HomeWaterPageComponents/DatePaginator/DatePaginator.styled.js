import styled from 'styled-components';


const Paginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 162px;
  color: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
  button {
    color: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
  }
`;

export {
  Paginator
}