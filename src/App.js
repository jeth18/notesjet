import React from 'react';
import { Switch, Route} from "wouter";
import Login from './components/login';
import Principal from './components/principal'

const App = () => (
  <Switch>
    <Route path="/" component={Login} />
    <Route path="/Principal/:id" component={Principal}> 
    </Route>
  </Switch>
)

export default App;
