import { Switch, Route } from 'react-router-dom';

// Views
import {
  Home,
  Profile
} from 'views';

export function Authorized() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}