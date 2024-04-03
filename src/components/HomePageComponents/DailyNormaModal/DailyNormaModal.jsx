import { useCallback, useEffect, useState } from 'react';
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
  CloseModalButton,
  ModalContainer,
  CloseIcon,
} from './DailyNormaModal.styled';
import { useDispatch } from 'react-redux';
import { updateWaterRate } from '../../../redux/waters/operations';

export const DailyNormaModal = ({ onClose }) => {
  const dispatch = useDispatch();
  // const {female, male} = useSelector(gender);
  const woman = { weight: Number(0.03), activity: Number(0.04) };
  const man = { weight: Number(0.04), activity: Number(0.06) };
  const [genderOption, setGenderOption] = useState(woman);
  const [userWeight, setUserWeight] = useState('');
  const [dailyNorma, setDailyNorma] = useState(''); //waterRate**selector
  const [userSportsActivite, setUserSportsActivite] = useState('');
  const [userWaterPredict, setUserWaterPredict] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const calculateWaterIntake = useCallback(() => {
    if (!userWeight || !userSportsActivite) return;
    const result = (
      userWeight * genderOption.weight +
      (userSportsActivite / 60) * genderOption.activity
    ).toFixed(2);
    setDailyNorma(result);
  }, [genderOption, userWeight, userSportsActivite]);

  useEffect(() => {
    calculateWaterIntake();
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

  const handleSave = () => {
    const parseDailyNorma = parseFloat(dailyNorma);
    const isValid =
      (userSportsActivite > 0 && userWeight > 0) || userWaterPredict > 0;
    if (!isValid) {
      alert('Fill all fields');
      return;
    }
    if (isNaN(parseDailyNorma) || parseDailyNorma <= 0) {
      alert('Enter a valid intake goal');
    }
    dispatch(
      updateWaterRate(userWaterPredict ? userWaterPredict : parseDailyNorma)
    ).then((data) => {
      if (!data.error) {
        onClose(),
          setUserWeight(''),
          setUserSportsActivite(''),
          setUserWaterPredict('');
      }
    });
  };
  return (
    <ModalContainer>
      <Modal>
        <HeadContainer>
          <Head>My daily norma</Head>
          <CloseModalButton onClick={() => onClose()}>
            <CloseIcon width="24" height="24">
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </CloseIcon>
          </CloseModalButton>
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
            <InfoSpan>*</InfoSpan> V is the volume of the water norm in liters
            per day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
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
                  onChange={() => setGenderOption(woman)}
                />
                <GenderPargh>For woman</GenderPargh>
              </GenderLabel>
              <GenderLabel>
                <GenderInput
                  type="radio"
                  name="gender"
                  value="man"
                  onChange={() => setGenderOption(man)}
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
                The time of active participation in sports or other activities
                with a high physical. load in hours:
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
            <GenderPargh>
              The required amount of water in liters per day:
              <WaterAmountSpan>
                {' '}
                {dailyNorma ? dailyNorma : 2} L
              </WaterAmountSpan>
            </GenderPargh>
          </UserInputsContainer>
          <UserWaterPredict>
            <CalculateHead>
              Write down how much water you will drink:
            </CalculateHead>
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
    </ModalContainer>
  );
};