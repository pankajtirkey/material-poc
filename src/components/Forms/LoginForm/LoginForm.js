import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import { AccountBoxOutlined, LockOutlined } from '@material-ui/icons';

const LoginForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <Grid
        container
        style={{ direction: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid item md={12}>
          <TextField
            variant='outlined'
            label='Email'
            type='email'
            margin='normal'
            required
            style={{ minWidth: '400px' }}
          />
        </Grid>
        <br />
        <Grid item md={12}>
          <TextField
            variant='outlined'
            label='Password'
            type='password'
            margin='normal'
            required
            style={{ minWidth: '400px' }}
          />
        </Grid>
        <Grid item md={12}>
          <Button variant='contained' color='primary' style={{ minWidth: '400px' }}>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
