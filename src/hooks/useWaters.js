import { useSelector } from 'react-redux';

import {
  selectWaterDayList,
  selectWaterMonthList,
  selectWaterRate,
} from '../redux/waters/selectors';

const useWater = () => {
  const waterDayList = useSelector(selectWaterDayList);
  const waterMonthList = useSelector(selectWaterMonthList);
  const waterRate = useSelector(selectWaterRate);

  return {
    waterDayList,
    waterMonthList,
    waterRate,
  };
};

export default useWater;
