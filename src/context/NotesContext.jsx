// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getJSONItem, newJSONItem, unshiftToJSONItem } from "../utils/storageMethods";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    getJSONItem("notes") ? getJSONItem("notes") : []
  );

  const addNewNote = (newNote) => {
    if (unshiftToJSONItem("notes", newNote)) {
      const localNotes = getJSONItem("notes");
      setNotes(localNotes);
    }
  };

  useEffect(() => {
     newJSONItem("notes",notes);
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNewNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
