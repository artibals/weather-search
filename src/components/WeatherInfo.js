import React from 'react';

class WeatherInfo extends React.Component {

    // componentWillMount() {
    //     this.setState(store.getState().weatherReducer)
    //     this.subscribeToStore();
    // }

    // subscribeToStore() {
    //     store.subscribe(() => {
    //         let newState = store.getState().weatherReducer
    //         this.setState(newState);
    //     })
    // }

    // displayData() {
    //     if(this.state.weatherInfo.data === '') {
    //         return this.state.error
    //     }
    //     return console.log(this.state.weatherInfo);
    // }

    //{this.state.response}
    render () {
        return (
        <div>
            <div>WeatherInfo</div>
            <span style={{outline: "1px solid red"}}>             
            </span>
        </div>
        
        )
    }
};

export default WeatherInfo;