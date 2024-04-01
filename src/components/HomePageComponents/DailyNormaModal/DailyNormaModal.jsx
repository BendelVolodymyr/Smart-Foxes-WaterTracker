import { useEffect, useState } from 'react';
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
 
} from './DailyNormaModal.styled';

export const DailyNormaModal = ({
  onClose,
  isOpen,
  SaveWaterNorma,
  dailyWaterNorma,
}) => {
  const woman = { weight: Number(0.03), activity: Number(0.04) };
  const man = { weight: Number(0.04), activity: Number(0.06) };
  const [genderOption, setGenderOption] = useState(woman);
  const [userWeight, setUserWeight] = useState();
  const [dailyNorma, setDailyNorma] = useState(dailyWaterNorma);
  const [userSportsActivite, setUserSportsActivite] = useState();
  const [userWaterPredict, setUserWaterPredict] = useState();
  const [userWaterPerDay, setUserWaterPerDay] = useState(1.5);
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
  return (
    <ModalContainer>
      <Modal>
        <HeadContainer>
          <Head>My daily norma</Head>
          <CloseModalButton onClick={() => onClose()}>X</CloseModalButton>
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
        <CalculateForm onSubmit={SaveWaterNorma}>
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
                onChange={() => setUserWeight()}
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
                onChange={() => setUserSportsActivite()}
              />
            </UserLabel>
            <GenderPargh>
              The required amount of water in liters per day:
              <WaterAmountSpan> 1.5 L</WaterAmountSpan>
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
              onChange={() => setUserWaterPredict()}
            />
          </UserWaterPredict>
          <ButtonContainer>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
        </CalculateForm>
      </Modal>
    </ModalContainer>
  );
};
