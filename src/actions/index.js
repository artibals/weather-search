import weatherApi from "../weather_api"

// Async action creators (redux-thunk)
export const fetchWeather = (query) => {
    return dispatch => {
      return weatherApi.getWeather(query).then(
        response => dispatch(fetchWeatherSuccess(response)),
        error => dispatch(fetchWeatherError(error))
      );
    };
  };

// Action creators
function fetchWeatherSuccess(response) {
    return {
        type: 'GET_WEATHER_SUCCESS',
        response
    };
};

function fetchWeatherError(error) {
    return {
        type: 'GET_WEATHER_ERROR',
        error
    };
};