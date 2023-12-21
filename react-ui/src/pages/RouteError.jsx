import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;
const Heading = styled.h1``;
const ErrorMessage = styled.p``;
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Container>
      <Heading>Oopsie!</Heading>
      <ErrorMessage>
        Something went wrong. We have no idea what it is.
      </ErrorMessage>
      <ErrorMessage>{error.statusText || error.message}</ErrorMessage>
    </Container>
  );
};

export default ErrorPage;
