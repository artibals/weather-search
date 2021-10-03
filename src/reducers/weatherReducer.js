const weatherDefaultState = {
    weatherInfo: '',
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = weatherDefaultState, action) => {
    switch(action.type) { 
        case 'GET_WEATHER_SUCCESS':
            return {...state, weatherInfo: action.response};
        case 'GET_WEATHER_ERROR':
            return {...state, error: action.error.toString()}; // action.error is axios error object
        default: 
            return state;
    }
};