import React from 'react';
import { Route } from 'react-router';
import {BrowserRouter, Route} from 'react-router';
import Home from "./Home";
import DashBoardPage from "./Dashboard";
import SettingPage from "./Setting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
        <Route path={"/home"} component={Home} />
        <Route path="/dashboard" component={DashBoardPage} />
        <Route path=".setting" component={SettingPage} />
       </BrowserRouter>
        
       
      </header>
    </div>
  );
}

export default App;
