import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

/*Views*/
import HomePage from './view/HomePage';

/*Common*/
import NavBar from './components/common/NavBar';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route to="/" exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
