import Buton from "../buton/Buton";
import CardStyles from "./Card.module.css";

const Card = ({ language, buton, images }) => {
  return (
    <div>
      <h1>{language}</h1>
      <img src={images} alt="" />
      <Buton btn={buton} />
    </div>
  );
};

export default Card;
