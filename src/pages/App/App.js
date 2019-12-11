import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() =>
          <LoginPage />
        }/>
      </Switch>
    </div>
  );
}

export default App;
