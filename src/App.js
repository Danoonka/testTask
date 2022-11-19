import './App.css';
import JobTile from "./routes/JobTile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import JobDetailed from "./routes/JobDetailed";


function App() {
  return (
          <div className="App">
              <Routes>
                  <Route path="/" element={<JobTile/>}/>
                  <Route path="/jobDetailed" element ={<JobDetailed/>}/>
              </Routes>
          </div>
  );
}

export default App;
