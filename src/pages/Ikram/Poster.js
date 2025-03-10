import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import "./ikram-style.css";

export default function Poster() {
  const [formData, setFormData] = useState({
    "city": "زيمر",
    "gender": "إنتقل",
    "fullname": "",
    "nickname": "",
    "death_date": new Date().toISOString().split("T")[0],
    "burial_def": "not_def",
    "burial_day": "",
    "burial_day_index": "اليوم",
    "burial_salatime": "بعد صلاة الظهر",
    "burial_clocktime": "",
    "sala_janaza_place": "",
    "masjid_place": "مسجد ابثان القديم",
    "cemetery_place": "مقبرة ابثان",
    "consolation_place": "المضافة",
    "other_consolation_place": "",
    "number_of_consolation_place": "3 أيام",
    "create_poster": false
  });

  const handleChange = (e) => {

    if (e.target.name === "city") {
      setFormData((prev) => ({ ...prev, city: get_city(e.target.value) }));
    }

    if (e.target.name === "gender") {
      setFormData((prev) => ({ ...prev, gender: get_gender(e.target.value) }));
    }
    
    if (e.target.name === "fullname") {
      setFormData((prev) => ({ ...prev, fullname: e.target.value }));
    }

    if (e.target.name === "nickname") {
      setFormData((prev) => ({ ...prev, nickname: e.target.value }));
    }

    if (e.target.name === "death_date") {
      setFormData((prev) => ({ ...prev, death_date: e.target.value }));
    }

    if (e.target.name === "burial_def") {
      setFormData((prev) => ({ ...prev, burial_def: e.target.value }));
    }

    if (e.target.name === "burial_day") {
      setFormData((prev) => ({ ...prev, burial_day: get_burial_day(e.target.value) }));
    }

    if (e.target.name === "burial_day") {
      setFormData((prev) => ({ ...prev, burial_day_index: e.target.value === "today" ? "اليوم" : "غدا" }));
    }

    if (e.target.name === "burial_salatime") {
      setFormData((prev) => ({ ...prev, burial_salatime: get_salah_time(e.target.value) }));
    }

    if (e.target.name === "burial_clocktime") {
      setFormData((prev) => ({ ...prev, burial_clocktime: e.target.value }));
    }
    
    if (e.target.name === "sala_janaza_place") {
      setFormData((prev) => ({ ...prev, sala_janaza_place: e.target.value }));
    }
    
    if (e.target.name === "masjid_place") {
      setFormData((prev) => ({ ...prev, masjid_place: get_masjid_place(e.target.value) }));
    }

    if (e.target.name === "cemetery_place") {
      setFormData((prev) => ({ ...prev, cemetery_place: get_cemetry_place(e.target.value) }));
    }

    if (e.target.name === "consolation_place") {
      setFormData((prev) => ({ ...prev, consolation_place: get_consolation_place(e.target.value) }));
    }

    if (e.target.name === "other_consolation_place") {
      setFormData((prev) => ({ ...prev, other_consolation_place: e.target.value }));
    }

    if (e.target.name === "number_of_consolation_place") {
      setFormData((prev) => ({ ...prev, number_of_consolation_place: get_days_number(e.target.value) }));
    }

    if (e.target.name === "create_poster") {
      setFormData((prev) => ({ ...prev, create_poster: true }));
    }
  };

  const get_city = (value) => {
    const cities = {
      zemer: "زيمر",
      jat: "جت",
      baqa: "باقة الغربية",
      other: "غير متوفر",
    };
    return cities[value];
  };

  const get_gender = (value) => (value === "male" ? "إنتقل" : "إنتقلت");

  const get_burial_day = (value) => {
    let date = new Date();
    let dayOfWeek = date.getDay();
    const days = [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    value === "tomorrow" && (dayOfWeek += 1);
    return days[dayOfWeek % 7];
  };

  const get_salah_time = (value) => {
    const times = {
      duhur: "بعد صلاة الظهر",
      asr: "بعد صلاة العصر",
      magreb: "بعد صلاة المغرب",
      isha: "بعد صلاة العشاء",
      fajr: "بعد صلاة الفجر",
      specific_time: "specific_time",
    };
    return times[value];
  };

  const get_masjid_place = (value) => {
    const masjids = {
      ibthan_old: "مسجد ابثان القديم",
      yamma: "مسجد يمة",
      beer_seki: "مسجد بئر السكة",
      marji_s: "مسجد الشافعي - المرجة الجنوبية",
      marji_n: "مسجد الإيمان - المرجة الشمالية",
      taqwa: "مسجد التقوى - ابثان",
      sd: "مسجد صلاح الدين - ابثان",
      ashbal: "مسجد الأشبال - بئر السكة",
    };
    return masjids[value];
  };

  const get_cemetry_place = (value) => {
    const cemeteries = {
      ibthan_1: "مقبرة ابثان",
      ibthan_2: "مقبرة ابثان - آل زرعي",
      yamma: "مقبرة يمة",
      yamma_new: "مقبرة يمة - السهل (الجديدة)",
      beer_seki: "مقبرة بئر السكة",
      marji_s: "مقبرة المرجة الجنوبية",
      marji_n: "مقبرة المرجة الشمالية",
      taher: "مقبرة بئر السكة - آل طاهر",
    };
    return cemeteries[value];
  };

  const get_days_number = (value) => {
    const days = {
      3: "3 أيام",
      2: "يومين",
      1: "يوم واحد",
    };
    return days[value];
  };

  const get_consolation_place = (value) => {
    if (value !== "other") {
      return value === "madafah" ? "المضافة" : "لا يوجد بيت عزاء";
    }
    else return "other";
  };
  
  const get_status_sala_janaza_masjid = () => {
    if (formData.sala_janaza_place !== undefined && formData.sala_janaza_place.includes("masjid")) return true
    else return false
  };
  
  const get_status_sala_janaza_cemetry = () => {
    if (formData.sala_janaza_place !== undefined && formData.sala_janaza_place.includes("cemetry")) return true
    else return false
  };

  const downloadImage = () => {
    html2canvas(document.getElementById("captureArea")).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "image.png";
      link.click();
    });
  };

  const formatDate = (dateStr) => {
    const dateParams = dateStr.split("-");
    return `${dateParams[2]}/${dateParams[1]}/${dateParams[0]}`;
  };

  return (
    <div className="container">
      <form id="details_form">
        <div className="row">
          <div className="col-25">
            <label htmlFor="city">البلد</label>
          </div>
          <div className="col-75">
            <select name="city" onChange={handleChange}>
              <option value="zemer">زيمر</option>
              <option value="jat">جت</option>
              <option value="baqa">باقة الغربية</option>
              <option value="other">غير متوفر</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="gender">الجنس</label>
          </div>
          <div className="col-75">
            <select name="gender" onChange={handleChange}>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="fullname">الإسم</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="nickname">الكنية</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="nickname"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="death_date">تاريخ الوفاة</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              name="death_date"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="burial_def">وقت الدفن</label>
          </div>
          <div className="col-25">
            <select
              name="burial_def"
              onChange={handleChange}
            >
              <option value="not_def">لم يحدد</option>
              <option value="def">حدد</option>
            </select>
          </div>
          <div
            className="col-25"
            style={{ display: formData.burial_def === "def" ? "block" : "none" }}
          >
            <select
              name="burial_day"
              onChange={handleChange}
            >
              <option value="today">اليوم</option>
              <option value="tomorrow">غدا</option>
            </select>
          </div>

          <div
            className="col-50"
            style={{ display: formData.burial_def === "def" ? "block" : "none" }}
          >
            <select
              name="burial_salatime"
              onChange={handleChange}
            >
              <option value="duhur">بعد صلاة الظهر</option>
              <option value="asr">بعد صلاة العصر</option>
              <option value="magreb">بعد صلاة المغرب</option>
              <option value="isha">بعد صلاة العشاء</option>
              <option value="fajr">بعد صلاة الفجر</option>
              <option value="specific_time">وقت محدد..</option>
            </select>
          </div>
          <div 
            className="col-50"
            style={{ display: formData.burial_salatime === "specific_time" ? "block" : "none" }}
          >
            <input
                type="time"
                name="burial_clocktime"
                onChange={handleChange}
              />
          </div>
        </div>

        <div
          className="row"
          style={{ display: formData.burial_def === "def" ? "block" : "none" }}
        >
          <div className="col-25">
            <label htmlFor="sala_janaza_place">صلاة الجنازة والتشييع</label>
          </div>
          <div className="col-75">
            <select
              name="sala_janaza_place"
              onChange={handleChange}
            >
              <option value="masjid_and_cemetry">في المسجد والمقبرة</option>
              <option value="masjid_only">في المسجد فقط</option>
              <option value="cemetry_only">في المقبرة فقط</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{
            display: get_status_sala_janaza_masjid()
              ? "block"
              : "none",
          }}
        >
          <div className="col-25">
            <label htmlFor="masjid_place">المسجد</label>
          </div>
          <div className="col-75">
            <select
              name="masjid_place"
              onChange={handleChange}
            >
              <option value="ibthan-old">مسجد ابثان القديم</option>
              <option value="yamma">مسجد يمة</option>
              <option value="beer-seki">مسجد بئر السكة</option>
              <option value="marji-s">مسجد الشافعي - المرجة الجنوبية</option>
              <option value="marji-n">مسجد الإيمان - المرجة الشمالية</option>
              <option value="taqwa">مسجد التقوى - ابثان</option>
              <option value="sd">مسجد صلاح الدين - ابثان</option>
              <option value="ashbal">مسجد الأشبال - بئر السكة</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{
            display: get_status_sala_janaza_cemetry()
              ? "block"
              : "none",
          }}
        >
          <div className="col-25">
            <label htmlFor="cemetery_place">المقبرة</label>
          </div>
          <div className="col-75">
            <select
              name="cemetery_place"
              onChange={handleChange}
            >
              <option value="ibthan-1">مقبرة ابثان</option>
              <option value="ibthan-2">مقبرة ابثان - آل زرعي</option>
              <option value="yamma">مقبرة يمة</option>
              <option value="yamma-new">مقبرة يمة - السهل (الجديدة)</option>
              <option value="beer-seki">مقبرة بئر السكة</option>
              <option value="marji-s">مقبرة المرجة الجنوبية</option>
              <option value="marji-n">مقبرة المرجة الشمالية</option>
              <option value="taher">مقبرة بئر السكة - آل طاهر</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{ display: formData.burial_def === "def" ? "block" : "none" }}
        >
          <div className="col-25">
            <label htmlFor="consolation_place">بيت العزاء</label>
          </div>
          <div className="col-30">
            <select
              id="consolation_place"
              name="consolation_place"
              onChange={handleChange}
            >
              <option value="madafah">المضافة</option>
              <option value="no-consolation">لا يوجد بيت عزاء</option>
              <option value="other">مكان آخر..</option>
            </select>
          </div>
          <div>
            <div className="col-40"
            style={{ display: formData.consolation_place === "other" ? "block" : "none" }}
            >
              <input
                type="text"
                id="other_consolation_place"
                name="other_consolation_place"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ display: formData.burial_def === "def" ? "block" : "none" }}
        >
          <div className="col-25">
            <label htmlFor="number_of_consolation_place">
              عدد أيام بيت العزاء
            </label>
          </div>
          <div className="col-30">
            <select
              id="number_of_consolation_place"
              name="number_of_consolation_place"
              onChange={handleChange}
            >
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{ display: formData.burial_def === "def" ? "block" : "none" }}
        >
          <div className="col-25">
            <label htmlFor="starting_consolation_time">
              بداية بيت العزاء
            </label>
          </div>
          <div className="col-30">
            <select
              id="starting_consolation_time"
              name="starting_consolation_time"
              onChange={handleChange}
            >
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <button type="button" name="create_poster" className="Btn" onClick={handleChange}>
            إنشاء
          </button>
        </div>
      </form>
      <div className="Postercontainer"
      style={{ display: formData.create_poster ? "block" : "none" }}
      >
        <div className="ikramContainer" id="captureArea">
          <div className="firstChild">
            <div className="ikramTitle"></div>
            <div className="ikramTextContainer">
              <p className="place_p">
                <label id="place">وفيات - {formData.city}</label>
              </p>
              <p className="date_p">
                <label id="date">
                  {formData.death_date && formatDate(formData.death_date)}
                </label>
              </p>
              <p className="gender_p">
                <label id="gender">{formData.gender} إلى رحمته تعالى</label>
              </p>
              <p className="fullname_p">
                <label id="fullname">{formData.fullname}</label>
              </p>
              {formData.nickname && (
                <p className="nickname_p">
                  <label id="nickname">({formData.nickname})</label>
                </p>
              )}
              {formData.burial_def === "not_def" ? (
                <p className="funeral_details">
                  <label id="funeral_details">الإعلان عن الجنازة لاحقا</label>
                </p>
              ) : (
                <>
                  <p className="burial_time_p">
                    <label id="burial_time">
                      {formData.burial_salatime === "specific_time"
                        ? `وسيشيع الجثمان ${formData.burial_day_index} ${formData.burial_day} الساعة ${formData.burial_clocktime}`
                        : `وسيشيع الجثمان ${formData.burial_day_index} ${formData.burial_day} ${formData.burial_salatime}`}
                    </label>
                  </p>
                  {formData.sala_janaza_place === "masjid_and_cemetry" && (
                    <>
                      <p className="masjid_place_p">
                        <label id="masjid_place">من {formData.masjid_place}</label>
                      </p>
                      <p className="cemetry_place_p">
                        <label id="cemetry_place">
                          الدفن في {formData.cemetery_place}
                        </label>
                      </p>
                    </>
                  )}
                  {formData.sala_janaza_place === "masjid_only" && (
                    <p className="masjid_place_p">
                      <label id="masjid_place">من {formData.masjid_place}</label>
                    </p>
                  )}
                  {formData.sala_janaza_place === "cemetry_only" && (
                    <p className="cemetry_place_p">
                      <label id="cemetry_place">في {formData.cemetery_place}</label>
                    </p>
                  )}
                  {formData.consolation_place === "no-consolation" ? (
                    <p className="consolation_place_p">
                      <label id="consolation_place">لا يوجد بيت عزاء</label>
                    </p>
                  ) : (
                    <p className="consolation_place_p">
                      <label id="consolation_place">
                        وسيكون بيت العزاء في {formData.consolation_place} بعد صلاة
                        العصر لمدة {formData.number_of_consolation_place}
                      </label>
                    </p>
                  )}
                </>
              )}
              <br />
            </div>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <button id="downloadBtn" className="Btn" onClick={downloadImage}>
            تنزيل صورة
          </button>
        </div> 
      </div>
    </div>
  );
}
