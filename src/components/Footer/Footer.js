import { Container, Grid, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Container style={{ position: 'absolute', bottom: '0px' }}>
      <Grid container>
        <Grid item md={12}>
          <footer>
            <Typography component='h1'>made by Pankaj Nelson Tirkey</Typography>
          </footer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
