import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Spinner from "./Spinner";


const WeatherInfo = () => {
    const [state, setState] = useState(null);
    const getData = useSelector(state => state.weatherReducer);

    useEffect(() => {
        setState(getData);
    }, [getData]);
  
    const error = () => (
        <div className="ui negative message">
            {state.error}
         </div>
    );

    const weather = () => {
        const cityWeather= state.weatherInfo.data.main;
        return Object.keys(cityWeather).map((key, i) => {
            return (
                <div className="ui celled horizontal list">
                    <li className="item" key={i}>
                        <span>{key}:  {cityWeather[key]}</span>
                    </li>
                </div>
            )
            })
    }

    return (
        <div>
            { state ? !state.error && !state.weatherInfo ? <Spinner/> :
            (state.weatherInfo !== null ? <div>{ weather() }</div> : error()) : null }
        </div>
    )
};

export default WeatherInfo;