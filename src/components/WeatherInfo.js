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
  
    console.log(getData.error);

    return (
        <div>
            {state !== null ? Object.keys(state).map((keys, i) => {
            return (
                <div className="ui celled horizontal list">
                    <div className="item" key={i}>
                        {keys}:  {state[keys]}
                    </div>
                </div>
            )
            }) : getData.error ? <div> {getData.error} </div> : <Spinner message="Waiting..." />}
        </div>
    )
};



export default WeatherInfo;