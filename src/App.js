import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  CategoryPage,
  ArticleDetailPage,
  SearchArticlePage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<SearchArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/articles/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
