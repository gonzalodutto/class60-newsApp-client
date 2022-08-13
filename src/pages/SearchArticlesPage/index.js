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

        // Put in a constant the Articles filtered, is here so I can display hoy much items I finded with the filtering via length method
        const articlesFiltered = articlesResponse.data.filter((articleObj) =>
          articleObj.title.toLowerCase().includes(filter)
        );

        // Set the feched data in the useState
        setArticleList(articlesFiltered);
      };

      // Run function
      fetchData();

      // If errase text in input, put again empty array
      if (params.filter) {
        setFilter(params.filter);
      } else {
        setFilter("");
      }

      // If no data is feched, send an error message
    } catch (e) {
      console.log(e.message);
    }

    // the useEffect is going to reload every time this values changes:
  }, [params.filter, filter]);

  const updateFilter = (e) => {
    // Update the useState of the filter
    setFilter(e.target.value);
    // Navigate to the same adress, but with the search value in the end
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
        <div>{articleList ? articleList.length : "..."} articles found</div>
        <div>
          {articleList
            ? articleList.map((article, i) => (
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
