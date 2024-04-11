import { useCallback, useContext, useMemo, useState } from 'react';
import {
  CalculateHead,
  ContainerGender,
  GenderLabel,
  GenderContainer,
  GenderInput,
  GenderPargh,
  GenderSpan,
  Head,
  InfoContainer,
  InfoPargh,
  InfoSpan,
  Modal,
  UserLabel,
  UserInputs,
  CalculateForm,
  UserInputsContainer,
  UserWaterPredict,
  SaveButton,
  ButtonContainer,
  WaterAmountSpan,
  HeadContainer,
  WaterAmountParagh,
} from './DailyNormaModal.styled';
import { useDispatch } from 'react-redux';
import { updateWaterRate } from '../../../redux/auth/operations.js';

import useAuth from '../../../hooks/useAuth.js';
import { ModalContext } from '../../../context/index.js';

import Notiflix from 'notiflix';

export const DailyNormaModal = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const woman = { weight: Number(0.03), activity: Number(0.04) };
  const man = { weight: Number(0.04), activity: Number(0.06) };
  const [genderOption, setGenderOption] = useState(man);
  const [userWeight, setUserWeight] = useState('');
  const [userSportsActivite, setUserSportsActivite] = useState('');
  const [userWaterPredict, setUserWaterPredict] = useState('');
  const waterRate = user.waterRate;
  const { closeModal } = useContext(ModalContext);

  const calculateWaterIntake = useCallback(() => {
    if (!userWeight || !userSportsActivite) return;
    const result = (
      userWeight * genderOption.weight +
      (userSportsActivite / 60) * genderOption.activity
    ).toFixed(1);
    return result;
  }, [genderOption, userWeight, userSportsActivite]);

  const dailyNorma = useMemo(() => {
    return calculateWaterIntake();
  }, [calculateWaterIntake]);

  const handleWaterPredict = (e) => {
    const value = e.target.value;
    const newWaterPredict = parseFloat(value);

    if (!isNaN(newWaterPredict) && newWaterPredict >= 1) {
      setUserWaterPredict(newWaterPredict);
    } else if (value === '') {
      setUserWaterPredict('');
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const parseDailyNorma = parseFloat(dailyNorma);

    const isValid = (userSportsActivite > 0 && userWeight > 0) || userWaterPredict > 0;

    if (!isValid) {
      Notiflix.Notify.warning('Fill all fields');

      return;
    }

    dispatch(updateWaterRate(userWaterPredict ? userWaterPredict : parseDailyNorma)).then(
      (data) => {
        if (!data.error) {
          closeModal(), setUserWeight(''), setUserSportsActivite(''), setUserWaterPredict('');
        } else {
          console.log(data.error);
          Notiflix.Notify.failure('Something went wrong');
        }
      }
    );
  };

  const toggleGender = (e) => {
    if (e.target.value === 'woman') {
      setGenderOption(woman);
    } else {
      setGenderOption(man);
    }
  };

  return (
    <Modal>
      <HeadContainer>
        <Head>My daily norma</Head>
      </HeadContainer>
      <ContainerGender>
        <GenderPargh>
          For girl: <GenderSpan>V=(M*0,03) + (T*0,4)</GenderSpan>
        </GenderPargh>
        <GenderPargh>
          For man: <GenderSpan>V=(M*0,04) + (T*0,6)</GenderSpan>
        </GenderPargh>
      </ContainerGender>
      <InfoContainer>
        <InfoPargh>
          <InfoSpan>*</InfoSpan> V is the volume of the water norm in liters per day, M is your body
          weight, T is the time of active sports, or another type of activity commensurate in terms
          of loads (in the absence of these, you must set 0)
        </InfoPargh>
      </InfoContainer>
      <CalculateForm>
        <UserInputsContainer>
          <CalculateHead>Calculate your rate:</CalculateHead>
          <GenderContainer>
            <GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="woman"
                onChange={toggleGender}
                // checked
              />
              <GenderPargh>For woman</GenderPargh>
            </GenderLabel>
            <GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="man"
                onChange={toggleGender}
                // checked={user.gender === 'male'}
              />
              <GenderPargh>For man</GenderPargh>
            </GenderLabel>
          </GenderContainer>
          <UserLabel>
            <GenderPargh>Your weight in kilograms:</GenderPargh>
            <UserInputs
              type="number"
              name="userWeight"
              placeholder="0"
              value={userWeight}
              min={0}
              max={250}
              onChange={(e) => setUserWeight(e.target.value)}
            />
          </UserLabel>
          <UserLabel>
            <GenderPargh>
              The time of active participation in sports or other activities with a high physical.
              load in hours:
            </GenderPargh>
            <UserInputs
              type="number"
              name="userActive"
              placeholder="0"
              value={userSportsActivite}
              min={0}
              onChange={(e) => setUserSportsActivite(e.target.value)}
            />
          </UserLabel>
          <WaterAmountParagh>
            The required amount of water in liters per day:
            <WaterAmountSpan>
              {' '}
              {dailyNorma ? dailyNorma : (waterRate / 1000).toFixed(1)} L
            </WaterAmountSpan>
          </WaterAmountParagh>
        </UserInputsContainer>
        <UserWaterPredict>
          <CalculateHead>Write down how much water you will drink:</CalculateHead>
          <UserInputs
            type="number"
            name="userWaterPredict"
            placeholder="0"
            value={userWaterPredict}
            min={0}
            onChange={handleWaterPredict}
          />
        </UserWaterPredict>
        <ButtonContainer>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ButtonContainer>
      </CalculateForm>
    </Modal>
  );
};
