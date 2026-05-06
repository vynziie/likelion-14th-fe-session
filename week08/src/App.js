import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiaryProvider } from "./context/DiaryContext";
import Home from "./pages/Home";
import History from "./pages/History";
import Detail from "./pages/Detail";

function App() {
  return (
    <DiaryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </DiaryProvider>
  );
}
export default App;