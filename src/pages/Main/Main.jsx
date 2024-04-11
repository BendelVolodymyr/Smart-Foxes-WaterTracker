import { useEffect } from 'react';
import { WaterСonsumptionTracker } from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import { WhyDrinkWater } from '../../components/WhyDrinkWater/WhyDrinkWater';
import { Wrapper, WrapperContent } from './Main.styled';
import { useDispatch } from 'react-redux';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { setToken } from '../../redux/auth/authSlice';
import useAuth from '../../hooks/useAuth';

const Main = () => {
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const token = searchParam[0].get('token');
  const navigate = useNavigate();
  const { token: data } = useAuth();
  console.log('hook', data);
  useEffect(() => {
    if (token) {
      try {
        dispatch(setToken(token));
        dispatch(refreshUser()).then(data => {
          if (!data.error) navigate('/home');
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [dispatch, navigate, token]);

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
