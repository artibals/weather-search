import React from 'react';
import store from '../stores'

class WeatherInfo extends React.Component {

    componentWillMount() {
        this.setState(store.getState().weatherReducer)
        this.subscribeToStore();
    }

    subscribeToStore() {
        store.subscribe(() => {
            let newState = store.getState().weatherReducer
            this.setState(newState);
        })
    }

    displayData() {
        while(this.state.weatherInfo.data === null) {
            return this.state.error
        }
        return this.state.weatherInfo.data
    }

    //{this.state.response}
    render () {
        return (
        <div>
            <div>WeatherInfo</div>
            <span style={{outline: "1px solid red"}}>
                {this.displayData()}
                
            </span>
        </div>
        
        )
    }
};

export default WeatherInfo;