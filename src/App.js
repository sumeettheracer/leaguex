
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Selected from "./components/Selected"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/done" element={<Selected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
