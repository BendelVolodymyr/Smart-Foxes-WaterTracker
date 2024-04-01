import {
  Blok,
  BlokList,
  BlokListItems,
  BlokListItemsText,
  BlokTitle,
} from './WhyDrinkWater.styled';
import { FaCircle } from 'react-icons/fa';

export const WhyDrinkWater = () => {
  return (
    <Blok>
      <BlokTitle>Why drink water</BlokTitle>
      <BlokList>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>
            Supply of nutrients to all organs
          </BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>Providing oxygen to the lungs</BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>
            Maintaining the work of the heart
          </BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>Release of processed substances</BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>
            Ensuring the stability of the internal environment
          </BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>
            Maintaining within the normal temperature
          </BlokListItemsText>
        </BlokListItems>
        <BlokListItems>
          <FaCircle size="8px" color="#407BFF" />
          <BlokListItemsText>
            Maintaining an immune system capable of resisting disease
          </BlokListItemsText>
        </BlokListItems>
      </BlokList>
    </Blok>
  );
};
