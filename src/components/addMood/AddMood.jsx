import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import Emoji from "./components/Emoji";
import LimitTextArea from "./components/LimitTextArea";
import TodayDate from "./components/TodayDate";
import { useWeather } from "../../context/WeatherCotext";

const emojiArr = [
  { icon: "&#x1F603;", name: "happy" },
  { icon: "&#x1F621;", name: "angry" },
  { icon: "&#x1F62D;", name: "sad" },
  { icon: "&#x1F922;", name: "sick" },
  { icon: "&#x1F631;", name: "fear" },
];
const AddMood = () => {
  const { weather } = useWeather();
  const [newNote, setNewNote] = useState({
    emoji: { icon: "&#x1F603;", name: "happy" },
    weather: null,
    main: null,
    text: null,
  });
  const { addNewNote } = useNotes();
  const setText = (text) => {
    setNewNote((note) => ({ ...note, text }));
  };
  const setEmoji = (emoji) => {
    setNewNote((note) => {
      return { ...note, emoji };
    });
  };
  const handleClick = () => {
    const { emoji, text } = newNote;
    if (emoji && text) {
      const timestamp = new Date().getTime();
      addNewNote({
        ...newNote,
        weather: weather?.weather || null,
        main: weather?.main || null,
        timestamp,
      });
    }
  };
  const { emoji, text } = newNote;
  const disable = emoji ? (text ? false : true) : true;
  return (
    <div className="text-center flex flex-col gap-2">
      <TodayDate />
      <h2 className="text-xl md:2xl">How are you feeling today?</h2>
      <div className="text-4xl md:text-5xl lg:text-6xl flex gap-1.5 justify-center">
        {emojiArr.map((elm, i) => (
          <Emoji key={i} entity={elm.icon} name={elm.name} isActive={newNote.emoji?.name==elm.name} onClick={setEmoji} />
        ))}
      </div>
      <LimitTextArea limit={50} onChange={setText} />
      <button
        className={`w-full text-xl sm:text-2xl p-[0.5em] cursor-pointer hover:opacity-70 active:opacity-90 rounded-xl bg-amber-500 text-amber-50 disabled:cursor-not-allowed disabled:opacity-50 transition-all delay-100`}
        onClick={handleClick}
        disabled={disable}
      >
        Save
      </button>
    </div>
  );
};

export default AddMood;
