const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;

const API_URL = import.meta.env.VITE_APP_WEATHER_API_URL;

export const getWeatherByLocation = async ({ lat, lon }) => {
  if (!lat) return {};

  try {
    const res = await fetch(
      `${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    const locationWeather = await res.json();

    return Object.keys(locationWeather).length === 0
      ? {}
      : {
          name: locationWeather.name,
          country: locationWeather.sys.country,
          date: new Date(locationWeather.dt * 1000).toDateString(),
          icon: locationWeather.weather[0].icon,
          description: locationWeather.weather[0].description,
          main: locationWeather.weather[0].main,
          max_temp: Math.round(locationWeather.main.temp_max),
          min_temp: Math.round(locationWeather.main.temp_min),
          temperature: Math.round(locationWeather.main.temp),
          feels_like: Math.round(locationWeather.main.feels_like),
          rain: locationWeather.rain?.['1h'],
          wind: locationWeather.wind?.speed,
          humidity: locationWeather.main.humidity,
          visibility: locationWeather.visibility / 1000,
          clouds: locationWeather.clouds?.all,
          snow: locationWeather.snow?.['1h'],
          sunrise: new Date(locationWeather.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(locationWeather.sys.sunset * 1000).toLocaleTimeString(),
        };
  } catch (error) {
    throw new Error('Error fetching weather data at your location');
  }
};

export const getForecastByLocation = async ({ lat, lon }) => {
  try {
    const res = await fetch(
      `${API_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    const weatherForecast = await res.json();

    const fiveDaysWeather = [];
    const threeHoursPerDay = 24 / 3;

    for (let i = 0; i < weatherForecast.list.length; i += threeHoursPerDay) {
      fiveDaysWeather.push(weatherForecast.list.slice(i, i + threeHoursPerDay));
    }

    const forecast = fiveDaysWeather.map((dailyWeather) => {
      return {
        name: weatherForecast.city.name,
        country: weatherForecast.city.country,
        date: new Date(dailyWeather[0].dt * 1000).toDateString(),
        icon: dailyWeather[4].weather[0].icon,
        description: dailyWeather[4].weather[0].description,
        main: dailyWeather[4].weather[0].main,
        day_temp: Math.round(
          Math.max(...dailyWeather.map((hourly) => hourly.main.temp_max)),
        ),
        night_temp: Math.round(
          Math.min(...dailyWeather.map((hourly) => hourly.main.temp_min)),
        ),
      };
    });
    return forecast;
  } catch (e) {
    throw new Error('Error fetching forecast data');
  }
};
