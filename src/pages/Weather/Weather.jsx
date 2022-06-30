import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/climate/monthly/:location').then((data) => console.log(data));
  }, []);

  return (
    <div className="weather">
      <div className=""></div>
    </div>
  );
};

export default Weather;
