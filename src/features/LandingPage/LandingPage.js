import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Grid container style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Grid item>
          <Link to='/login'>
            <Typography component='h1'>Login</Typography>
          </Link>
        </Grid>
        {/*  <Grid item></Grid> */}
      </Grid>
    </Container>
  );
};

export default LandingPage;
