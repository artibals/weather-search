import axios from "axios";

const API_KEY = "b8eba22b1ad4cdee9fee55ef84112f72";

const weatherApi =  {
    getWeather(query) {
        return axios.get(
            "http://api.openweathermap.org/data/2.5/weather",
            {
                q: query,
                appid: API_KEY
            }
        )
    }
};

export default weatherApi;