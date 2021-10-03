import React, { useState, useCallback } from 'react';
import { fetchWeather } from '../actions';
import { useDispatch } from "react-redux";

const CityInput = () => {
    const [city, setCity]=useState();
    const dispatch = useDispatch();

    const cityHandler=(city)=>{
        dispatch(fetchWeather(city));
    };
    const handler = useCallback(()=>{cityHandler(city)},[city])

        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter City Name</label>
                        <input onChange={e => setCity(e.target.value)}
                         className="input" />
                         <br />
                         <br />
                         <button onClick={handler} className="ui primary button"> Confirm </button>
                    </div>
                </div>
            </div>
        )
    
};

export default CityInput;