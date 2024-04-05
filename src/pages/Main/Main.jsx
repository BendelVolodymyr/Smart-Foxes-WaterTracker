import { WaterСonsumptionTracker } from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import { WhyDrinkWater } from '../../components/WhyDrinkWater/WhyDrinkWater';
import { Wrapper, WrapperContent } from './Main.styled';

const Main = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <WaterСonsumptionTracker />
        <WhyDrinkWater />
      </WrapperContent>
    </Wrapper>
  );
};
export default Main;
