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
                <div>
                    <li className="" key={i}>
                        <span className="">{key}  {state[key]}</span>
                    </li>
                </div>
            )
            }) : 'Waiting...'}
        </div>
    )
};

// function renderContent() {
//     if(getData.weatherInfo.data === undefined) {
//         return (
//             <div>Error: </div>
//         );
//     };

//     if(getData.weatherInfo.data !== undefined) {
//         return (
//             <div>
//                 {getData.weatherInfo.data.main.temp}
//             </div>
//         );
//     };
    
//     return <Spinner message="Please wait" />
// };

export default WeatherInfo;