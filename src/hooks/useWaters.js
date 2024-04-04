import { useSelector } from 'react-redux';

import {
  selectWaterDayList,
  selectWaterMonthList,
  selectEaterRate,
} from '../redux/waters/selectors';

const useWater = () => {
  const waterDayList = useSelector(selectWaterDayList);
  const waterMonthList = useSelector(selectWaterMonthList);
  const waterRate = useSelector(selectEaterRate);

  return {
    waterDayList,
    waterMonthList,
    waterRate,
  };
};

export default useWater;
