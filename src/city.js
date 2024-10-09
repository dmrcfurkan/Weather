export const cities = [
  { name: "İstanbul", lat: 41.0082, lon: 28.9784 },
  { name: "Ankara", lat: 39.9334, lon: 32.8597 },
  { name: "İzmir", lat: 38.4192, lon: 27.1287 },
  { name: "Antalya", lat: 36.8969, lon: 30.7133 },
  { name: "Bursa", lat: 40.1828, lon: 29.0664 },
  { name: "Adana", lat: 37.0, lon: 35.3213 },
  { name: "Konya", lat: 37.8722, lon: 32.4989 },
  { name: "Gaziantep", lat: 37.0662, lon: 37.3833 },
  { name: "Şanlıurfa", lat: 37.1675, lon: 38.7955 },
  { name: "Mersin", lat: 36.8121, lon: 34.6411 },
];

const baseUrl = "https://api.open-meteo.com/v1/forecast";

export const hourlyParameters = [
  "temperature_2m",
  "apparent_temperature",
  "precipitation_probability",
  "weather_code",
  "wind_speed_10m",
];

export const getCityTemp = async (city) => {
  const val=[];
  const { lat, lon } = city;
  const url = `${baseUrl}?latitude=${lat}&longitude=${lon}&hourly=${hourlyParameters.join(
    ","
  )}&timezone=Europe/Istanbul`;
  const response = await fetch(url); // TODO: Use promise, get data in appJS
  const data = await response.json();
  val.push(data)
  
  return data
  
};
