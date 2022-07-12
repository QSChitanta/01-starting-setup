import "./Card.css";

function Card(props) {
  const classes = props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

//section 3 video 40 refactoring auf Card
