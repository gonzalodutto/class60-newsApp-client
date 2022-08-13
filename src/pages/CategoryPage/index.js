import "./styles.css";
import { ArticleCard } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const [articleList, setArticleList] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const articlesResponse = await axios.get(
          "http://localhost:4000/articles"
        );

        const articles = articlesResponse.data.filter(
          (articleObj) => articleObj.categoryId === parseInt(params.id)
        );

        setArticleList(articles);
      };

      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, [params.id]);

  return (
    <div>
      <div>
        <h1>Read the latest article</h1>
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
  );
};

export { CategoryPage };
