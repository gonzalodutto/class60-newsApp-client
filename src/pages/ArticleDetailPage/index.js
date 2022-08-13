import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetailPage = () => {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    try {
      const getArticle = async () => {
        const response = await axios.get(
          `http://localhost:4000/articles/${params.id}`
        );
        // console.log(response);
        setArticle(response.data);
      };
      getArticle();
    } catch (e) {
      console.log(e.message);
    }
  }, [params.id]);

  return (
    <div>
      <div className="ContainerArticleDetailPage">
        {!article ? (
          "Loading.."
        ) : (
          <div className="AllProductDetails">
            <div className="ProductDescr">
              <h2>{article.title}</h2>
              <img src={article.imageUrl} alt="lk" width="250px" />
              <h4>{article.author}</h4>
              <div>{article.publishDate}</div>
              <p className="textArea">{article.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { ArticleDetailPage };
