import { ArticleCard } from "../../components";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const HomePage = () => {
  const [lastArticle, setlastArticle] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const articlesResponse = await axios.get(
          "http://localhost:4000/articles"
        );

        const lastArticle = articlesResponse.data.filter(
          (key) =>
            key.unixTimeStamp ===
            articlesResponse.data.reduce(
              (acc, shot) =>
                (acc = acc > shot.unixTimeStamp ? acc : shot.unixTimeStamp),
              0
            )
        );

        setlastArticle(lastArticle);
      };

      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Read the latest article</h1>
        {lastArticle ? (
          <ArticleCard
            id={lastArticle[0].id}
            author={lastArticle[0].author}
            img={lastArticle[0].imageUrl}
            title={lastArticle[0].title}
            categoryId={lastArticle[0].categoryId}
          />
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
};

export { HomePage };
