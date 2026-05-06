import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

function Home() {
  const [mood, setMood] = useState("happy"); 
  const [content, setContent] = useState(""); 
  const { addDiary } = useContext(DiaryContext); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return alert("내용을 입력해주세요!");


    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      content,
    };

    addDiary(newEntry); 
    navigate("/history"); 
  };

  return (
    <div className="container">
      <h2>오늘의 기분을 기록해보세요 🦁</h2>
      <form onSubmit={handleSubmit}>
        <div className="mood-selector">
          {["happy", "neutral", "sad"].map((m) => (
            <button 
              key={m} 
              type="button"
              className={mood === m ? "active" : ""}
              onClick={() => setMood(m)}
            >
              {m === "happy" ? "😊 행복" : m === "neutral" ? "😐 평범" : "😢 슬픔"}
            </button>
          ))}
        </div>
        <textarea 
          placeholder="오늘 있었던 일을 간단히 써보세요"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Controlled Form 방식
        />
        <button type="submit">기록하기</button>
      </form>
    </div>
  );
}

export default Home;