import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const WeatherInfo = () => {
    const [state, setState] = useState(null);
    const getData = useSelector(state => state);

    useEffect(() => {
        if(getData.weatherReducer.weatherInfo.data.weather !== 'undefined') {
            setState(getData.weatherReducer.weatherInfo.data.weather)
        }
      }, [getData]);
    // const getData = useSelector(state => state.weatherReducer.weatherInfo.data.weather);
    // console.log(getData);
    console.log(state);
    return (
        <div>
            <div>WeatherInfo</div>
            <span style={{outline: "1px solid red"}}>             
            </span>
        </div>
    )
};

export default WeatherInfo;