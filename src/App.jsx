import "./App.css";
import AddMood from "./components/addMood/AddMood";
import Weather from "./components/weather/Weather";
import { useWeather } from "./context/WeatherCotext";

function App() {
  const { weather, error } = useWeather();
  return (
    <div className="w-full rounded-2xl border-2 border-black p-1">
      <div className="flex justify-between">
        <h1>Mood Journal</h1>
        {error ? (
          <span>{error}</span>
        ) : weather ? (
          <Weather data={weather} />
        ) : (
          <span>wait..</span>
        )}
      </div>
      <div className="flex gap-1">
        <div className="flex-auto">
          <AddMood />
        </div>
        <div className="flex-auto"></div>
      </div>
    </div>
  );
}

export default App;
