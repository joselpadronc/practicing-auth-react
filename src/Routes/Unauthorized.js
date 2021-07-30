import { Switch, Route } from 'react-router-dom';

// Views
import {
  Login,
  Register
} from 'views';

export function Unauthorized() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}