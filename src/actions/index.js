import weatherApi from "../weather_api"

// Async action creators (redux-thunk)
export const getWeather = (query) => {
    return dispatch => {
      return weatherApi.getWeather(query).then(
        response => dispatch(getWeatherSuccess(response)),
        error => dispatch(getWeatherError(error))
      );
    };
  };

// Action creators
function getWeatherSuccess(response) {
    return {
        type: 'GET_WEATHER_SUCCESS',
        response
    };
};

function getWeatherError(error) {
    return {
        type: 'GET_WEATHER_ERROR',
        error
    };
};