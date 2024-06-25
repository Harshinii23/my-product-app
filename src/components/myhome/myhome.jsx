import React from "react";
import { useNavigate } from "react-router-dom";
import './myhome.css';

const MyHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };
  return (
    <div className="home">
      <h1>Welcome</h1>
      <h3>Product Application!!</h3>
      <div className="btn" onClick={handleClick}>
        Product List
      </div>
    </div>
  );
};
export default MyHome;
