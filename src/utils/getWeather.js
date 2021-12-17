const asyncRequest = require("async-request");

const getWeather = async (address) => {
  const token = "c8a912f83ec91131ae68f38da4c5a9e2";
  const url = `http://api.weatherstack.com/current?access_key=${token}&query=${address}`;
  try {
    const response = await asyncRequest(url);
    const data = JSON.parse(response.body);
    return {
      success: true,
      temperature: data.current.temperature,
      wind_speed: data.current.wind_speed,
      precip: data.current.precip,
      cloudcover: data.current.cloudcover,
      country: data.location.country,
      region: data.location.region,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error,
    };
  }
};

module.exports = {
  getWeather,
};