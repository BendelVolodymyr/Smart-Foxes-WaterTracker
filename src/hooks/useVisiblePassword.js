import { useState } from 'react';

export const useVisiblePassword = () => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const [type, setType] = useState('password');

  const handleShowPassword = () => {
    setToggleIcon(!toggleIcon);
    if (toggleIcon === true) {
      setType('text');
    } else {
      setType('password');
    }
  };

  return { handleShowPassword, toggleIcon, type };
};
