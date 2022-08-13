import { ArticleCard } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const SearchArticlePage = () => {
  const [articleList, setArticleList] = useState(null);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const articlesResponse = await axios.get(
          "http://localhost:4000/articles"
        );
        setArticleList(articlesResponse.data);
      };

      fetchData();
      if (params.filter) {
        setFilter(params.filter);
      } else {
        setFilter("");
      }
    } catch (e) {
      console.log(e.message);
    }
  }, [params.filter]);

  const updateFilter = (e) => {
    setFilter(e.target.value);
    navigate(`/articles/${e.target.value}`);
  };

  return (
    <div>
      <div>
        <h1>Welcome to Search Article Page</h1>
        <div>
          <input
            type="text"
            value={filter.toLowerCase()}
            onChange={updateFilter}
          />
        </div>
        <div>
          {articleList
            ? articleList
                .filter((characterObj) =>
                  characterObj.title.toLowerCase().includes(filter)
                )
                .map((article, i) => (
                  <ArticleCard
                    key={i}
                    id={article.id}
                    author={article.author}
                    img={article.imageUrl}
                    title={article.title}
                    categoryId={article.categoryId}
                  />
                ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};

export { SearchArticlePage };
