import { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Providers
import {AuthContext} from 'providers/AuthProvider';

// Views
import {
  Home,
  Login,
  Register,
  Profile,
  NotFound
} from 'views';

// Components
import {
  Navbar,
} from 'components';

export function Router() {
  const {isAuth} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}/>
        <Route
          exact
          path="/login"
          render={() => !isAuth ? <Login /> : <Redirect to="/"/>}/>
        <Route
          exact
          path="/register"
          render={() => !isAuth ? <Register /> : <Redirect to="/"/>}/>
        <Route
          exact
          path="/profile"
          render={() => isAuth ? <Profile /> : <Redirect to="/"/>}/>

        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}