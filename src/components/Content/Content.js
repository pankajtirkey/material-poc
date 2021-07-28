import { Container } from '@material-ui/core';

const Content = ({ children }) => (
  <Container>
    <main>{children}</main>
  </Container>
);

export default Content;
