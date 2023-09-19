import React from 'react';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() 
{
  return 
  (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Egyéb útvonalak és komponensek */}
      </Switch>
    </Router>
  );
}

export default App;