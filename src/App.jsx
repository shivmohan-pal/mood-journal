import "./App.css";
import AddMood from "./components/addMood/AddMood";
import NoteCard from "./components/addMood/components/NoteCard";
import Calender from "./components/calenderView/Calender";
import Weather from "./components/weather/Weather";
import { useNotes } from "./context/NotesContext";
import { useWeather } from "./context/WeatherCotext";

function App() {
  const { weather, error } = useWeather();
  const { notes } = useNotes();

  return (
    <div className="w-full h-full overflow-auto md:rounded-2xl md:border-2 border-black md:p-6">
      <div className="flex sticky z-10 top-0 justify-between items-center px-4 py-2 backdrop-blur-3xl md:rounded-2xl">
        <h1 className="text-2xl">Mood Journal</h1>
        {error ? (
          <span>{error}</span>
        ) : weather ? (
          <Weather data={weather} />
        ) : (
          <span>wait..</span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6 border-2 rounded-2xl">
        <div className="flex-1/2">
          <AddMood />
        </div>
        <div className="flex-1/2">
          <Calender />
        </div>
      </div>

      <div className="relative p-6">
        <div className="overflow-auto h-[70vh] md:h-auto">
          <h2 className="sticky top-0 z-10 text-2xl py-2 bg-white">
            All Notes
          </h2>
          <div className="flex flex-col gap-2 flex-wrap">
            {notes.length ? (
              notes.map((elm, i) => <NoteCard key={i} data={elm} />)
            ) : (
              <span>No Notes found. Add one your self</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
