import { ArticleCard } from "../../components";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const SearchArticlePage = () => {
  const [articleList, setArticleList] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const articlesResponse = await axios.get(
          "http://localhost:4000/articles"
        );
        setArticleList(articlesResponse.data);
      };

      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to Search Article Page</h1>
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
