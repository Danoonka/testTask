import './App.css';
import JobTile from "./components/jobTile/JobTile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import JobDetailed from "./components/jobDetailed/JobDetailed";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<JobTile/>}/>
                  <Route path="/jobDetailed" element ={<JobDetailed/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
