import { Link } from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    //eslint-disable-next-line
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
