import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      },2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#003153';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");

     }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    {/* <Navbar /> */}
    <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
      </Routes> 
    </div> 
    </Router>
    </>
  );
}

export default App;
