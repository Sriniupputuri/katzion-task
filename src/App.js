import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { useState } from "react";
import MyContext from "./components/MyContext";
import { useEffect } from "react";

const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF57A3', '#A3FF57', '#57A3FF']; // Add more colors as needed

function getRandomColor(previousColors) {
  let availableColors = colors.filter(color => !previousColors.includes(color));
  if (availableColors.length === 0) {
    // If all colors have been used, reset the list of previous colors
    previousColors.length = 0;
    availableColors = colors;
  }
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const selectedColor = availableColors[randomIndex];
  previousColors.push(selectedColor);
  return selectedColor;
}

function App() {
  let [mainData, setMainData] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Initial background color
  const [previousColors, setPreviousColors] = useState([]);

  useEffect(() => {
    const newColor = getRandomColor(previousColors);
    setBackgroundColor(newColor);
  }, [previousColors]);

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
