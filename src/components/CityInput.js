import React from 'react';
import { getWeather } from '../actions';
import store from '../stores';

class CityInput extends React.Component {
    getWeather(query) {
        store.dispatch(getWeather(query))
    }

    render() {
        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input onChange={e => this.getWeather(e.target.value)}
                         className="input" />
                    </div>
                </div>
            </div>
        )
    };
    
};

export default CityInput;