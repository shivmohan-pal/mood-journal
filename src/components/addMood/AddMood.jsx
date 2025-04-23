import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import Emoji from "./components/Emoji";
import LimitTextArea from "./components/LimitTextArea";
import TodayDate from "./components/TodayDate";
import { useWeather } from "../../context/WeatherCotext";

const AddMood = () => {
  const { weather } = useWeather();
  console.log(weather)
  const [newNote, setNewNote] = useState({
    emoji: null,
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
    const { emoji, text} = newNote;
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
  const disable = emoji? text ? false : true : true;
  return (
    <div className="text-center flex flex-col gap-2">
      <TodayDate />
      <h2 className="text-2xl">How are you feeling today?</h2>
      <div className="text-6xl flex gap-1.5 justify-center">
        <Emoji entity={"&#x1F603;"} name="happy" onClick={setEmoji} />
        <Emoji entity={"&#x1F621;"} name="angry" onClick={setEmoji} />
        <Emoji entity={"&#x1F62D;"} name="sad" onClick={setEmoji} />
        <Emoji entity={"&#x1F922;"} name="sick" onClick={setEmoji} />
        <Emoji entity={"&#x1F631;"} name="fear" onClick={setEmoji} />
      </div>
      <LimitTextArea limit={50} onChange={setText} />
      <button
        className={`w-full text-2xl p-[0.5em] cursor-pointer hover:opacity-70 active:opacity-90 rounded-xl bg-amber-500 text-amber-50 disabled:cursor-not-allowed disabled:opacity-50 transition-all delay-100`}
        onClick={handleClick}
        disabled={disable}
      >
        Save
      </button>
    </div>
  );
};

export default AddMood;
