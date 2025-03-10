import React from "react";
import { useNavigate } from "react-router-dom";
import ikramIcon from "./icons/ikram-icon.png";
import aqsaIcon from "./icons/aqsa-icon.png";
import sdIcon from "./icons/sd-icon.png";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <h1 className="homeTitle">حياكم الله في صفحة حلول الرسمية</h1>
      <div className="servicesContainer">
        <img
          src={ikramIcon}
          alt="Go to Ikram"
          style={{ width: "100px", cursor: "pointer" }} // Styling
          onClick={() => navigate("/frontend/ikram")} // Navigate to Home on Click
        />
        <img
          src={aqsaIcon}
          alt="Go to Aqsa"
          style={{ width: "100px", cursor: "pointer" }} // Styling
          onClick={() => navigate("/frontend/aqsana/poster")} // Navigate to Home on Click
        />
        <img
          src={sdIcon}
          alt="Go to Salah Eldin"
          style={{ width: "100px", cursor: "pointer" }} // Styling
          onClick={() => alert("إنتظرونا!")} // Navigate to Home on Click
        />
      </div>
    </div>
  );
}
