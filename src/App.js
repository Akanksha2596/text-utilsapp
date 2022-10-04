import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" />
    {/* <Navbar /> */}
    <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter the text to analyze"/>} />
      </Routes> 
    </div> 
    </Router>
    </>
  );
}

export default App;
