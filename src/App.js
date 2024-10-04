import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  const appStyle = {
    height: '100vh',
    backgroundColor: mode === 'light' ? '#d5e4dc' : '#333',
    overflow: "auto"
  }
  return (
    <>
      <Router>
        {/* <div className={`App bg-${mode}`} > */}
        <div className="App " style={appStyle}>
          {/* <div className=" container-fluid bg-success h-100" >  */}
          <Navbar title="TextCrafts" mode={mode} toggleMode={toggleMode} />
          <Switch>
            <Route exact path="/">
              <div className="container my-5 ">
                <TextForm heading="Enter your text below" mode={mode} />
              </div>
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
