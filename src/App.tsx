import { Route, Switch } from "wouter";
import "./index.css";
import Header from "./components/layout/header/Header";
import HomePage from "./pages/home/Home";
import PostDetailPage from "./pages/postDetail/PostDetail";
import AuthorDetailPage from "./pages/authorDetail/AuthorDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/post/:id/:slug" component={PostDetailPage} />
        <Route path="/author/:id/:slug" component={AuthorDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
