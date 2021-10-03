import React from 'react';
import { fetchWeather } from '../actions';
import { useDispatch } from "react-redux";

const CityInput = () => {
    const dispatch = useDispatch();

    const getWeather = (query) => {
        dispatch(fetchWeather(query))
    }

        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input onChange={e => getWeather(e.target.value)}
                         className="input" />
                    </div>
                </div>
            </div>
        )
    
};

export default CityInput;