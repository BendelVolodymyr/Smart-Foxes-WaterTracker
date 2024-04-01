import { WaterСonsumptionTracker } from '../WaterСonsumptionTracker/WaterСonsumptionTracker';
import { WhyDrinkWater } from '../WhyDrinkWater/WhyDrinkWater';
import { Wrapper } from './Main.styled';

export const Main = () => {
  return (
    <Wrapper>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </Wrapper>
  );
};
