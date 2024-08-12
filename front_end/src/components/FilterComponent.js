import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FilterComponent.css";

const FilterComponent = ({ setResults }) => {
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleFilter = async () => {
    try {
      const response = await axios.get("http://localhost:8000/reservations", {
        params: {
          location,
          dateTime,
          guests,
        },
      });
      setResults(response.data);

      // 검색 결과 페이지로 이동
      navigate("/results");
    } catch (error) {
      // 에러 처리
      console.error("Error fetching the data:", error);
      alert("검색 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="장소"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="날짜와 시간"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="참가 인원"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <button onClick={handleFilter}>검색</button>
    </div>
  );
};

export default FilterComponent;
