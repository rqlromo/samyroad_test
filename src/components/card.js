// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Like from "../components/like";

const Card = ({ item, image }) => {
  const { author, title, liked, likes_count, main_attachment } = item;

  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={main_attachment.big} alt="product" />
      </div>
      <div className="card__footer">
        <p className="card__title">{title}</p>
        <p className="card__subtitle">
          <span className="card__subtitle_light">by </span>
          {author}
        </p>
      </div>
      <Like liked={liked} likesCount={likes_count} />
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object,
};
