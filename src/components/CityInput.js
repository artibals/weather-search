import React from 'react';
import { fetchWeather } from '../actions';
import { useDispatch } from "react-redux";

const CityInput = () => {
    const dispatch = useDispatch();

        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input onChange={e => dispatch(fetchWeather(e.target.value))}
                         className="input" />
                    </div>
                </div>
            </div>
        )
    
};

export default CityInput;