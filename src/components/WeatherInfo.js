import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
// let getData = null;

const WeatherInfo = () => {
    const [state, setState] = useState(null);
    const getData = useSelector(state => state.weatherReducer);

    useEffect(() => {
       if(getData.weatherInfo){
        setState(getData.weatherInfo.data.main);
       }
      }, [getData]);
  
    console.log(state);

    return (
        <div>
            {state !== null ? Object.keys(state).map((key, i) => {
            return (
                <div className="ui celled horizontal list">
                    <li className="item" key={i}>
                        <span>{key}:  {state[key]}</span>
                    </li>
                </div>
            )
            }) : <Spinner />}
        </div>
    )
};



export default WeatherInfo;