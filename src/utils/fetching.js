export const weatherURI = (lat, lon, apikey) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

export const fetchAndSetState = async (uri, setState, setError) => {
  try {
    const res = await fetch(uri);
    const jsonData = await res.json();
    setState(jsonData);
  } catch (err) {
    setError(err.message);
  }
};

 
export const weatherIcon = (iconName, zoom) =>
  `https://openweathermap.org/img/wn/${iconName}${zoom ? "@" + zoom : ""}.png`; //zomm valid values : 2x or 4x