import "./styles.css";
import { NavLink } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <div className="ArticleCardComponent">
      <div className="card-text-section">
        <div className="articleInformation">
          <img src={props.img} alt="imag" width="193px" />
          <div>Name: {props.Name}</div>
          <div>Id: {props.id}</div>
          <div>Date: {props.dateOfBirth}</div>
        </div>
        <div>
          <button className="MoreInformationButton">
            <NavLink className="product-title" to={`/patients/${props.id}`}>
              Show details
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ArticleCard };
