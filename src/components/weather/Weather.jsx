import { KtoC } from "../../utils/calculation";
import { weatherIcon } from "../../utils/fetching";

const Weather = ({ data }) => {
  const { cod } = data;
  if (cod && cod != 200) return <span>location not found</span>;
  const { main, weather } = data;
  return (
    <div className="flex gap-1 items-center">
      <span>
        <img src={weatherIcon(weather[0].icon)} alt={weather[0].main} />
      </span>
      <span>
        {KtoC(main.temp)}
        <sup>o</sup>C
      </span>
    </div>
  );
};

export default Weather;
