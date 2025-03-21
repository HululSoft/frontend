import React from "react";
import { useNavigate } from "react-router-dom";
import ikramIcon from "./icons/ikram-icon.png";
import aqsaIcon from "./icons/aqsa-icon.png";
import sdIcon from "./icons/sd-icon.png";
import "./home-page-style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <h1 className="homeTitle">حياكم الله في صفحة حلول الرسمية</h1>
      <div className="servicesContainer">
        <div
          className="ikram_service project-card"
          onClick={() => navigate("/frontend/ikram")}
        >
          <img className="project-logo" src={ikramIcon} alt="Go to Ikram" />
          <p className="project-description">
            تطبيق مخصص لإنشاء بوسترات نعي وإعلانات تفاصيل الجنازة
          </p>
        </div>
        <div
          className="ikram_service project-card"
          onClick={() => navigate("/frontend/aqsana/poster")}
        >
          <img
            className="project-logo"
            src={aqsaIcon}
            alt="Go to Aqsa"
            onClick={() => navigate("/frontend/aqsana/poster")} // Navigate to Home on Click
          />
          <p className="project-description">
            تطبيق مخصص لتصميم بوسترات الدعوة لشد الرحال إلى المسجد الأقصى
            المبارك
          </p>
        </div>
        <div
          className="ikram_service project-card"
          onClick={() => alert("إنتظرونا!")}
        >
          <img
            className="project-logo"
            src={sdIcon}
            alt="Go to Salah Eldin"
          />
          <p className="project-description">
            تطبيق مخصص لخدمات مركز صلاح الدين التربوي
          </p>
        </div>
      </div>
    </div>
  );
}
