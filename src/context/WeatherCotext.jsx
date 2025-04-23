// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { fetchAndSetState, weatherURI } from "../utils/fetching";

const WeatherContext = createContext();
const API_Key = import.meta.env.VITE_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchAndSetState(weatherURI(lat, lon, API_Key), setWeather, setError);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation not supported.");
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
