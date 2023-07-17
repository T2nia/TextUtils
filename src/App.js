import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1200);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.querySelector('body').style.backgroundColor = "black";
      document.querySelector('body').style.color = "white";
      showAlert("Dark mode has been enabled!","success")
    }
    else{
      setMode('light');
      document.querySelector('body').style.backgroundColor = "white";
      document.querySelector('body').style.color = "black";
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    {/* <NavBar title='TextUtils' AboutText='Aboutus'/> ---------- Use the input which i gave */}
    {/* <NavBar/>  ---------- Use default values here */}
    <Router>
    <NavBar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>   {/* use title from my input and AboutText from default value */}
    <Alert alert={alert}/>
    <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
