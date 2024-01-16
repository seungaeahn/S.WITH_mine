import React, { useState } from "react";
import "../css/Toggle.css";

export default function Toggle() {
  const [isCityVisible, setCityVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleContent = (city) => {
    setCityVisible(!isCityVisible);
    setSelectedCity(city);
  };

  const cities = [
    " 강남/역삼/삼성",
    "신사/청담/압구정",
    "서초/교대/사당",
    " 잠실/송파/강동",
    " 을지로/명동/중구/동대문",
    " 서울역/이태원/용산",
    "종로/인사동",
    "홍대/합정/마포/서대문",
    "여의도",
    "구로/신도림/금천",
    "건대입구/성수/왕십리",
    "성북/강북/노원/도봉",
    "기타",
  ];

  return (
    <div>
      <button id="mainToggleButton" onClick={() => toggleContent("")}>
        지역
      </button>

      <div
        id="region_section"
        className={isCityVisible ? "city-content active" : "city-content"}
      >
        <ul className="region">
          {isCityVisible &&
            cities.map((city) => (
              <button
                key={city}
                id="cityToggleButton"
                onClick={() => toggleContent(city)}
              >
                {city}
              </button>
            ))}
        </ul>
      </div>
    </div>
  );
}
