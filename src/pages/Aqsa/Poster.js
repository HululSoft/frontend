import React, { useState, useRef  } from 'react'
import '../../style/aqsana.css';
import imageFile from './aqsa.png';
import html2canvas from "html2canvas";

export default function Poster() {
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedRegistrars, setSelectedRegistrars] = useState([]);
    const registars = [
        {id : 1, name : "عمر بدران", phone : "05888888888"},
        {id : 2, name : "محمد عاهد", phone : "0599999"},
        {id : 3, name : "ام عمير", phone : "0577777"},
    ]
    const weekdays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const posterRef = useRef(null)
    const handleRegistrarsChange = (event) => {
        if (event.target.value) {
          setSelectedRegistrars([...selectedRegistrars,event.target.value]);
        }
    };
    
    const handleDayChange = (event) => {
        if (event.target.value) {
            setSelectedDays([...selectedDays,event.target.value]);
        }
    };

    const createPoster = ()=>{
        posterRef.current.style.display = 'block'
    }

    const downloadPoster = ()=>{
        const input = posterRef.current;
        
        html2canvas(input).then((canvas) => {
            const link = document.createElement("a"); // Create an anchor element
            link.download = "screenshot.png"; // Specify the file name
            link.href = canvas.toDataURL("image/png"); // Convert canvas to PNG data URL
            link.click(); // Trigger the download
        });
    }

    return (
        <div className='mainContainer' dir="rtl">
            <p className='israa_aya'>سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ</p>
            <div className='formContainer'>
                <div className='registars'>
                    <label>أختر أسماء المسجلين</label>
                        {
                            registars.map((person)=>(
                                <div>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value = {person.name}
                                        onChange={handleRegistrarsChange}
                                    />
                                    <label className='persons'>{person.name}</label>
                                </div>
                            ))
                        }
                </div>
                <div className='days'>
                    <label>أختر يوم الإنطلاق</label>
                    {
                        weekdays.map((day)=>(
                            <div>
                                <input
                                    type="checkbox"
                                    checked={day.checked}
                                    value = {day}
                                    onChange={handleDayChange}
                                />
                                <label>{day}</label>
                            </div>
                        ))
                    }
                </div>
                <button onClick={createPoster}>create poster</button>
            </div>
            <div className="poster-container" ref={posterRef}>
                <img className="poster-background" src={imageFile} alt="poster background"/>
            </div>
            <button onClick={downloadPoster}>download poster</button>
            <script src="./js/inForm.js?v=1.0.1"></script>
        </div>
    )
}
