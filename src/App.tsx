import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/layout/header/Header";
import HomePage from "./pages/home/Home";
import PostDetailPage from "./pages/PostDetail/PostDetail";

export function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id/:slug" element={<PostDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
