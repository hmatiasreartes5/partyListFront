import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

/** Componentes */
/** Para logueo y registro */
import Login from './components/auth/login';
import Signup from './components/auth/signup';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup}/>
          </Switch>
      </Router>
  );
}

export default App;
