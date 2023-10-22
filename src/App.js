import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { useState } from "react";
import MyContext from "./components/MyContext";

function App() {
  let [mainData, setMainData] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <MyContext.Provider value={{ mainData, setMainData }}>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor }}>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<Table />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
