import React from "react";
import { useNavigate } from "react-router-dom";
import ikramIcon from "./icons/ikram-icon.png";
import aqsaIcon from "./icons/aqsa-icon.png";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>حياكم الله في صفحة حلول الرسمية</h1>
      <img
        src={ikramIcon} 
        alt="Go to Ikram"
        style={{ width: "100px", cursor: "pointer" }} // Styling
        onClick={() => navigate("/ikram")} // Navigate to Home on Click
      />
      <img
        src={aqsaIcon} 
        alt="Go to Aqsa"
        style={{ width: "100px", cursor: "pointer" }} // Styling
        onClick={() => navigate("/aqsana/poster")} // Navigate to Home on Click
      />
    </div>
  );
}
