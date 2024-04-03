import { Box, Mask, Title } from './Loader.styled';
// import { useSelector } from 'react-redux';
// import { selectorIsLoading } from '../../redux/selectors';

export const Loader = () => {
  // const isLoading = useSelector(selectorIsLoading);
  return (
    // <>{isLoading &&
    <Box>
      <Title>
        <Mask>Loading</Mask>
      </Title>
    </Box>
    // }</>
  );
};
