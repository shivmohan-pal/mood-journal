import { KtoC } from "../../../utils/calculation";
import { weatherIcon } from "../../../utils/fetching";

const NoteCard = ({ data }) => {
  const { emoji, timestamp, text, weather, main } = data;

  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-66 rounded-xl border-2 p-1 items-start flex gap-2">
      <span
        className="text-3xl"
        dangerouslySetInnerHTML={{ __html: emoji.icon }}
      ></span>
      <div className="flex-auto flex flex-col gap-1 h-full">
        <div className="flex flex-auto justify-between">
          <p className="text-black text-wrap text-sm">{text}</p>
          <p className="text-xs text-gray-400 text-nowrap">{timeString}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{dateString}</span>
          {weather && (
            <div className="flex gap-1 items-center">
              <span className="relative w-6">
                <img
                  className="w-full h-full object-contain"
                  src={weatherIcon(weather[0].icon)}
                  alt={weather[0].main}
                />
              </span>
              <span>
                {KtoC(main.temp)}
                <sup>o</sup>C
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
