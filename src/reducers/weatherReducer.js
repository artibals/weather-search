const weatherDefaultState = {
    weatherInfo: null,
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = weatherDefaultState, action) => {
    switch(action.type) { 
        case 'GET_WEATHER_SUCCESS':
            return {weatherInfo: action.response, error: null};
        case 'GET_WEATHER_ERROR':
            return {error: action.error.toString(), weatherInfo: null};
        default: 
            return state;
    }
};