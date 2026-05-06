import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DiaryContext } from "../context/DiaryContext";

function History() {
  const { diaries } = useContext(DiaryContext);

  return (
    <div>
      <h2>기록한 감정 목록</h2>
      <nav><Link to="/">기록하러 가기</Link></nav>
      <ul>
        {diaries.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>
              [{item.date}] {item.mood} - {item.content.substring(0, 10)}...
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;