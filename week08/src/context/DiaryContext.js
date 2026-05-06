import { createContext, useState, useEffect } from "react";

export const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("diaries") || "[]");
    setDiaries(saved);
  }, []);

  const addDiary = (newDiary) => {
    const updated = [newDiary, ...diaries];
    setDiaries(updated);
    localStorage.setItem("diaries", JSON.stringify(updated));
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};