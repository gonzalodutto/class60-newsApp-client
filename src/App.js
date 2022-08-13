import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  HomePage,
  CategoryPage,
  ArticleDetailPage,
  SearchArticlePage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <h1>
        <NavLink to="/">
          📰 new <b>News()</b>
        </NavLink>
      </h1>
      <NavLink to="/articles">Search 🔍</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/articles" element={<SearchArticlePage />}>
          <Route path="/articles/:filter" element={<HomePage />} />
        </Route>
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/articles/category/:id" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
