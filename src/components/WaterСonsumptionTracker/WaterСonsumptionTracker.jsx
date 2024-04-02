import {
  Blok,
  BlokList,
  BlokListItems,
  BlokListItemsContainer,
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
            <BlokListItemsContainer>
              <IoCalendarOutline size="100%" color="#407BFF" />
            </BlokListItemsContainer>
            <BlokListItemsText>Habit drive</BlokListItemsText>
          </BlokListItems>

          <BlokListItems>
            <BlokListItemsContainer>
              <HiOutlinePresentationChartBar size="100%" color="#407BFF" />
            </BlokListItemsContainer>
            <BlokListItemsText>View statistics</BlokListItemsText>
          </BlokListItems>

          <BlokListItems>
            <BlokListItemsContainer>
              <HiOutlineWrenchScrewdriver size="100%" color="#407BFF" />
            </BlokListItemsContainer>
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
