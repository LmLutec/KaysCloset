import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import NewProduct from "./components/NewProduct";

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    <Home setPageIndex={setPageIndex} />,
    <NewProduct setPageIndex={setPageIndex} />,
  ];

  const currentPage = pages[pageIndex];

  return <div className="App">{currentPage}</div>;
}

export default App;
