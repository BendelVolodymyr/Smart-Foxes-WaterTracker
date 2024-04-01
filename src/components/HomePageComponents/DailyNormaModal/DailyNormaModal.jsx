import { useEffect, useState } from 'react';

const DailyNormaModal = ({ onClose, isOpen, SaveWaterNorma }) => {
  const woman = { weight: Number(0.03), activity: Number(0.04) };
  const man = { weight: Number(0.04), activity: Number(0.06) };
  const [genderOption, setGenderOption] = useState(woman);
  const [userWeight, setUserWeight] = useState();
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

  console.log(genderOption);
  return (
    <div>
      <h2></h2>
      <div>
        <p></p>
        <p></p>
      </div>
      <p></p>
      <form onSubmit={SaveWaterNorma}>
        <h3>Calculate your rate:</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="woman"
            onChange={() => setGenderOption(woman)}
          />
          <span>For woman</span>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="man"
            onChange={() => setGenderOption(man)}
          />
          <span>For man</span>
        </label>
        <label>
          Your weight in kilograms:
          <input
            type="number"
            name="userWeight"
            placeholder="0"
            value={userWeight}
            min={0}
            max={250}
            onChange={() => setUserWeight()}
          />
        </label>
        <label>
          The time of active participation in sports or other activities with a
          high physical. load in hours:
          <input
            type="number"
            name="userActive"
            placeholder="0"
            value={userSportsActivite}
            min={0}
            onChange={() => setUserSportsActivite()}
          />
        </label>
        <label>
          The required amount of water in liters per day:
          <span>
            {() => {
              const sum =
                userWeight * genderOption.weight +
                userSportsActivite * genderOption.activity;
              return Number(sum);
            }}
          </span>
        </label>
        <label>
          Write down how much water you will drink:
          <input
            type="number"
            name="userWaterPredict"
            placeholder="0"
            value={userWaterPredict}
            min={0}
            onChange={() => setUserWaterPredict()}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
};

export default DailyNormaModal;
