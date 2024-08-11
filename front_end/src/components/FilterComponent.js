import React, { useState } from 'react';
import axios from 'axios';
import './FilterComponent.css'

const FilterComponent = ({ setResults }) => {
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleFilter = async () => {
        const response = await axios.get('http://localhost:8000/reservations', {
            params: {
                location,
                dateTime,
                guests
            }
        });
        setResults(response.data);
    };

    return (
        <div className="filter-container">
            <input type="text" placeholder="장소" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input 
                type="datetime-local" 
                placeholder="날짜와 시간" 
                value={dateTime} 
                onChange={(e) => setDateTime(e.target.value)} 
            />
            <input type="number" placeholder="참가 인원" value={guests} onChange={(e) => setGuests(e.target.value)} />
            <button onClick={handleFilter}>검색</button>
        </div>
    );
};

export default FilterComponent;
