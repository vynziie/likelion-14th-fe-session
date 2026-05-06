import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaries } = useContext(DiaryContext);
  const diary = diaries.find((d) => d.id === Number(id));

  if (!diary) return <p>기록을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>기록 상세</h2>
      <p>날짜: {diary.date}</p>
      <p>기분: {diary.mood}</p>
      <p>내용: {diary.content}</p>
      <button onClick={() => navigate("/history")}>목록으로</button>
    </div>
  );
}

export default Detail;