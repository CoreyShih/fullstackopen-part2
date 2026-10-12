import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ city, cca2 }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .get(city, cca2)
      .then(returnedWeather => setWeather(returnedWeather))
  }, [])

  if (!weather) {
    return null
  }

  const iconUrl = `https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`

  return (
    <div>
      <h2>{`Weather in ${city}`}</h2>
      <div>{`Temperature ${weather.main.temp} Celsius`}</div>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <div>{`Wind ${weather.wind.speed} m/s`}</div>
    </div>
  )
}

export default Weather