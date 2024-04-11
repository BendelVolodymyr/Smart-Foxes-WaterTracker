import styled from 'styled-components';

const DailyWaterWrapper = styled.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
  border-radius: 10px;
  border-color: ${(p) => p.theme.colors.secondary.color1};
`;
const DailyWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`;
const DailyNormaP = styled.p`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary.text};
  white-space: nowrap;
`;

const ButtonEditNorma = styled.button`
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
  position: relative;
  color: transparent;
  -webkit-text-stroke: 0.5px ${(p) => p.theme.colors.primary.accent};
`;
const SpanEditForEffect = styled.span`
  position: absolute;
  color: ${(p) => p.theme.colors.primary.accent};
  animation: animate 4s ease-in-out infinite;
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        44% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

const NumberDailyNorma = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${(p) => p.theme.colors.primary.accent};
`;

export {
  SpanEditForEffect,
  DailyWaterWrapper,
  DailyNormaP,
  ButtonEditNorma,
  DailyWrapper,
  NumberDailyNorma,
};
