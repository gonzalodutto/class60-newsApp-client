import "./styles.css";
import { NavLink } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <div className="ArticleCardComponent">
      <div className="card-text-section">
        <div className="articleInformation">
          <img src={props.img} alt="imag" width="193px" />
          <div>
            {" "}
            <h1>{props.title}</h1>
          </div>
          <div>By: {props.author}</div>
          <div>
            categoryId:{" "}
            <NavLink to={`/articles/category/${props.categoryId}`}>
              {props.categoryId}
            </NavLink>
          </div>
        </div>
        <div>
          <button className="MoreInformationButton">
            <NavLink
              className="product-title"
              to={`/articles/by_id/${props.id}`}
            >
              Read this article
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ArticleCard };
