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
    <div className="sm:min-w-1/3 rounded-xl border-2 p-1 pr-2 items-start flex gap-2">
      <span
        className="text-4xl sm:text-5xl md:text-6xl"
        dangerouslySetInnerHTML={{ __html: emoji.icon }}
      />
      <div className="flex-auto flex flex-col gap-1 h-full">
        <div className="flex flex-auto justify-between">
          <p className="text-black text-wrap font-medium sm:text-lg md:text-xl lg:text-2xl">{text}</p>
          <p className="text-xs text-gray-400 text-nowrap pt-0.5">{timeString}</p>
        </div>
        <div className="flex justify-between items-end text-sm text-gray-500">
          <span>{dateString}</span>
          {weather && (
            <div className="flex gap-1 items-end">
              <span className="relative w-5 sm:w-6 md:w-7 lg:w-8">
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
