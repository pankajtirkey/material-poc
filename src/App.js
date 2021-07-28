import { CssBaseline } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './containers/PageLayout/PageLayout';
import Dashboard from './features/Dashboard/Dashboard';
import LandingPage from './features/LandingPage/LandingPage';
import Login from './features/Login/Login';
import NotFound from './features/NotFound/NotFound';

const App = () => {
  return (
    <>
      <CssBaseline />
      <PageLayout>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='*' component={NotFound} />
        </Switch>
      </PageLayout>
    </>
  );
};

export default App;
