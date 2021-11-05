import React from "react";
import "../styles/Home.css";

const Home = ({ setPageIndex }) => {
  const createProduct = () => {
    setPageIndex(1);
  };

  return (
    <div className="homeContainer">
      <h2>Admin Home Page</h2>
      <div className="options">
        <button className="newProduct" onClick={createProduct}>
          Create Product
        </button>
      </div>
    </div>
  );
};

export default Home;
