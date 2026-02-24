import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/layout/header/Header";
import HomePage from "./pages/home/Home";
import PostDetailPage from "./pages/postDetail/PostDetail";
import AuthorDetailPage from "./pages/authorDetail/AuthorDetail";

export function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id/:slug" element={<PostDetailPage />} />
          <Route path="/author/:id/:slug" element={<AuthorDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
