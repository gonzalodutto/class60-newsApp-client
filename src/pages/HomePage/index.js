import { ArticleCard } from "../../components";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const HomePage = () => {
  // const [articleList, setArticleList] = useState(null);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const articlesResponse = await axios.get(
  //         "http://localhost:4000/patients"
  //       );
  //       setArticleList(articlesResponse.data);
  //     };

  //     fetchData();
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);
  return (
    <div>
      <div>
        <h1>Welcome to Home Page</h1>
        <ArticleCard />
      </div>
    </div>
  );
};

export { HomePage };
