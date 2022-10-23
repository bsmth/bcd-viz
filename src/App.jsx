import React from "react";
import bcd from "@mdn/browser-compat-data";
import logo from "./logo.svg";
import "./App.css";
import StockChart from "./components/stockChart";
import ExampleBarChart from "./components/exampleBarChart";

function App() {
  // let chart = <BcdChart data={hubData} title={"Browser Compatibility Data"} />;
  const docBodySupport = bcd["api"]["Document"]["body"]["__compat"]["support"];

  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: ["10:00", "", "", "", "12:00", "", "", "", "2:00", "", "", "", "4:00"],
      data: [2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325, 2.325, 2.32],
    },
  };

  return (
    <div class="relative text-white bg-gradient-to-r from-indigo-500">
      <div className="bg-black">
        <div className="h-8 p-8 flex justify-center">
          <img src={logo} className="App-logo items-center h-8" alt="logo" />
        </div>
        <div>
          <h2 className="h-16 p-8 flex justify-center">Exploring Browser Compatibility Data</h2>
        </div>
      </div>

      <div className="min-w-screen  flex items-center justify-center px-5 py-5">
        <StockChart info={data} />
      </div>
      <div className="min-w-screen  flex items-center justify-center px-5 py-5">
        <ExampleBarChart></ExampleBarChart>
      </div>
      <input type="text" list="features" />
      <datalist id="features">
        {Object.keys(docBodySupport).map((key) => (
          <option value={key} />
        ))}
      </datalist>
      {/* based on the chosen item in datalist, set variable data to display */}
    </div>
  );
}

export default App;
