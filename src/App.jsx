import "./App.css";
import AddMood from "./components/addMood/AddMood";
import NoteCard from "./components/addMood/components/NoteCard";
import Weather from "./components/weather/Weather";
import { useNotes } from "./context/NotesContext";
import { useWeather } from "./context/WeatherCotext";

function App() {
  const { weather, error } = useWeather();
  const { notes } = useNotes();

  return (
    <div className="w-full rounded-2xl border-2 border-black p-6">
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
      <div className="flex gap-1 p-6 border-2 rounded-2xl">
        <div className="flex-1/2">
          <AddMood />
        </div>
        <div className="flex-1/2"></div>
      </div>

      <div>
        <h2>All Notes</h2>
        <div className="flex gap-2 flex-wrap">
          {notes.length ? (
            notes.map((elm, i) => <NoteCard key={i} data={elm} />)
          ) : (
            <span>No Notes found. Add one your self</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
