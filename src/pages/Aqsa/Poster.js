import React, { useState, useRef } from "react";
import "./aqsa-style.css";
import template from "./templates/template.jpg";
import calendarIcon from "./icons/calendar.png";
import timeIcon from "./icons/clock.png";
import placeIcon from "./icons/location-pin.png";
import html2canvas from "html2canvas";

export default function Poster() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedRegistrars, setSelectedRegistrars] = useState([]);
  const [departureLocation, setDepartureLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPrayer, setSelectedPrayer] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const registars = [
    { id: 1, name: "عمر بدران", phone: "050-3399953" },
    { id: 2, name: "محمد (أبو عبيدة)", phone: "052-6442853" },
    { id: 3, name: "ام طارق", phone: "052-8029957" },
  ];
  const departureLocations = [
    "محطة باصات كافيه",
    "المضافة",
    "البير - المسجد القديم بئر السكة",
  ];
  const cities = ["باقة", "جت", "زيمر"];
  const prayers = [
    "صلاة الفجر",
    "صلاة العصر والمغرب والعشاء جمعا",
    "صلاة الجمعة",
    "صلاة الظهر والعصر جمعا",
    "صلاة المغرب والعشاء جمعا",
    "صلاة التراويح"
  ];
  const posterRef = useRef(null);
  const handleRegistrarsChange = (event) => {
    if (selectedRegistrars.find(registar => registar.name === event.target.value) == undefined) {
      setSelectedRegistrars([...selectedRegistrars, registars.find((person) => person.name === event.target.value)]);
    }
    else {
      setSelectedRegistrars(selectedRegistrars.filter(registar => registar.name !== event.target.value));
    }
  };
  const handleDepartureLocationChange = (event) => {
    setDepartureLocation(event.target.value);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handlePrayerChange = (event) => {
    setSelectedPrayer(event.target.value);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value); // Store the selected time
  };
  const handleDateChange = (event) => {
    const date_list = event.target.value.split("-");
    const date_format = new Date(event.target.value);
    const options = { weekday: "long" }; // Long format for full day name
    const dayOfWeek = date_format.toLocaleDateString("ar-EG", options); // Adjust locale as needed
    let day = date_list[2];
    let month = date_list[1];
    if (day[0] === "0") day = day[1];
    if (month[0] === "0") month = month[1];
    setSelectedDate(`${day}.${month}`);
    setSelectedDay(dayOfWeek);
  };
  const createPoster = () => {
    if (
      selectedRegistrars.length === 0 ||
      selectedDay.length === 0 ||
      !departureLocation ||
      !selectedPrayer
    ) {
      alert("عبئ جميع التفاصيل أولا!");
      return;
    }
    posterRef.current.style.display = "block";
  };

  const downloadPoster = () => {
    const input = posterRef.current;
    if (
      selectedRegistrars.length === 0 ||
      selectedDay.length === 0 ||
      !departureLocation ||
      !selectedPrayer
    ) {
      alert("عبئ جميع التفاصيل أولا!");
      return;
    }

    html2canvas(input).then((canvas) => {
      const link = document.createElement("a"); // Create an anchor element
      link.download = "screenshot.png"; // Specify the file name
      link.href = canvas.toDataURL("image/png"); // Convert canvas to PNG data URL
      link.click(); // Trigger the download
    });
  };

  return (
    <div className="mainContainer" dir="rtl">
      <p className="israa_aya">
        سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ
        الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ
        لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ
      </p>
      <div className="formContainer">
        <div className="city">
          <label>أختر المدينة</label>
          <div>
            {cities.map((city, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={city}
                  name="city"
                  value={city}
                  checked={selectedCity === city}
                  onChange={handleCityChange}
                />
                <label htmlFor={city}>{city}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="registars">
          <label>أختر أسماء المسجلين</label>
          {registars.map((person) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value={person.name}
                onChange={handleRegistrarsChange}
              />
              <label className="persons">{person.name}</label>
            </div>
          ))}
        </div>
        <div className="departureLocation">
          <label>أختر نقطة الانطلاق</label>
          <div>
            {departureLocations.map((location, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={location}
                  name="departureLocation"
                  value={location}
                  checked={departureLocation === location}
                  onChange={handleDepartureLocationChange}
                />
                <label htmlFor={location}>{location}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="prayers">
          <label>أختر الصلاة</label>
          <div>
            {prayers.map((prayer, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={prayer}
                  name="prayer"
                  value={prayer}
                  checked={selectedPrayer === prayer}
                  onChange={handlePrayerChange}
                />
                <label htmlFor={prayer}>{prayer}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="date-picker">
          <label htmlFor="date">اختر اليوم والتاريخ</label>
          <input type="date" id="date" onChange={handleDateChange} />
        </div>
        <div className="time-picker">
          <label htmlFor="time">اختر ساعة الإنطلاق</label>
          <input type="time" value={selectedTime} onChange={handleTimeChange} />
        </div>
        <button onClick={createPoster}>create poster</button>
      </div>
      <div
        className="poster-container"
        ref={posterRef}
        style={{ display: "none" }}
      >
        <img
          className="poster-background"
          src={template}
          alt="poster background"
        />
        <div className="overlay-container">
          <div className="upper-container">
            <div className="city-text">
              أهلنا الكرام في {selectedCity} ندعوكم
            </div>
            <div className="static-text">
              لشد الرحال إلى المسجد الأقصى المبارك
            </div>
          </div>
          <div className="body-container">
            <div className="title-container">
              <div className="prayer-text">لأداء {selectedPrayer}</div>
            </div>
              <div className="details-container">
                <div className="date-container">
                  <img className="calendar-icon" src={calendarIcon} alt="calendar icon"/>
                  <div className="date-text">{selectedDate}</div>
                  <div className="day-text">{selectedDay}</div>
                </div>
                <div className="time-container">
                  <img className="clock-icon" src={timeIcon} alt="clock icon" />
                  <div className="time-text">{selectedTime}</div>
                </div>
                <div className="place-container">
                  <img className="place-icon" src={placeIcon} alt="place icon" />
                  <div className="place-text">{departureLocation}</div>
                </div>
            </div>
          </div>
          <div className="footer-container">
              <div className="footer-text-info">
                بإمكانكم المساهمة
                <br />
                في كفالة الحافلات
              </div>
              <div className="footer-text-register">للحجز:</div>
              <div className="registars-container">
                {selectedRegistrars.map((item)=>(
                  <div className="registar-container">
                    <div className={`registar-${item.id}-name`}>{item.name}</div>
                    <div className={`registar-${item.id}-phone`}>{item.phone}</div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
      <button onClick={downloadPoster}>download poster</button>
      <script src="./js/inForm.js?v=1.0.1"></script>
    </div>
  );
}
