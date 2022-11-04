import Button from "./Button";
import PropTypes from "prop-types";
import fa_star from "../images/fa-star.png";
import fb_star from "../images/fb-star.png";

function FaStar(props) {
  let { icon, className, id, onClick } = props;
  const thisbb = {    
    "fa-star": fa_star,
    "fb-star": fb_star,
  };
  [className, id];
  return <img src={
    thisbb[icon]
  } alt="" srcSet="" onClick={onClick} id={id} />;
}

FaStar.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function Card({
  id,
  handleStarClick,
  word,
  part_of_speech,
  definition,
  handleExampleClick,
  children}) {
  // example;
  children;
  // console.log(children);
  return (
    <>
      <div className="vocabulary">
        <Button className={"icon-button"}>
          <FaStar
            icon="fa-star"
            className="fa-star"
            id={`star-${id}`}
            onClick={handleStarClick}
          />
        </Button>
        <h2 className="word">{word}</h2>
        <h4>{part_of_speech}</h4>
      </div>
      <h3 className="definition">{definition}</h3>
      <Button
        className={"example-button"}
        text={"Example"}
        onClick={handleExampleClick}
      />
      {
        // https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react
        // TODO: TOAsk? Magic???
        // example ?? <></>
        // id
        // [children]
      }
      {/* <h5 className="example_sent">{example}</h5> */}
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  word: PropTypes.string.isRequired,
  part_of_speech: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  handleStarClick: PropTypes.func,
  handleExampleClick: PropTypes.func,
  // example: PropTypes.node,
  children: PropTypes.node,
};
