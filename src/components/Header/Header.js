import { Container, Typography } from '@material-ui/core';

const Header = () => (
  <Container style={{ position: 'absolute', top: '0px', textAlign: 'center' }}>
    <header>
      <Typography component='h1'>MATERIAL POC</Typography>
    </header>
  </Container>
);

export default Header;
