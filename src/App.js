
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import All_selected from "./components/All_selected"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/complete" element={<All_selected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
