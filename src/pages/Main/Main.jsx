import { WaterСonsumptionTracker } from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import { WhyDrinkWater } from '../../components/WhyDrinkWater/WhyDrinkWater';
import { Wrapper } from './Main.styled';

const Main = () => {
  return (
    <Wrapper>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </Wrapper>
  );
};
export default Main;
