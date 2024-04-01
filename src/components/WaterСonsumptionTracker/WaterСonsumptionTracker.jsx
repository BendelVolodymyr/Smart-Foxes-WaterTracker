import {
  Blok,
  BlokList,
  BlokListItems,
  BlokListItemsText,
  BlokTitle,
  Button,
  Subtitle,
  Title,
  Wrapper,
} from './WaterСonsumptionTracker.styled';
import { IoCalendarOutline } from 'react-icons/io5';
import { HiOutlinePresentationChartBar } from 'react-icons/hi2';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export const WaterСonsumptionTracker = () => {
  return (
    <Wrapper>
      <Title>Water consumption tracker</Title>
      <Subtitle>Record daily water intake and track</Subtitle>
      <Blok>
        <BlokTitle>Tracker Benefits</BlokTitle>
        <BlokList>
          <BlokListItems>
            <IoCalendarOutline size="32px" color="#407BFF" />
            <BlokListItemsText>Habit drive</BlokListItemsText>
          </BlokListItems>
          <BlokListItems>
            <HiOutlinePresentationChartBar size="32px" color="#407BFF" />
            <BlokListItemsText>View statistics</BlokListItemsText>
          </BlokListItems>
          <BlokListItems>
            <HiOutlineWrenchScrewdriver size="32px" color="#407BFF" />
            <BlokListItemsText>Personal rate setting</BlokListItemsText>
          </BlokListItems>
        </BlokList>
      </Blok>
      <Link to="/signup">
        <Button type="button">Try tracker</Button>
      </Link>
    </Wrapper>
  );
};
