// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";

// icons
import IconLike from "../components/icons/iconLike";

const Like = ({ likesCount, liked }) => {
  const [like, setLike] = useState(liked);

  const _setLike = () => {
    setLike(!like)
  }

  return (
    <div className="like">
      <div
        className={`like__icon ${like ? "like__icon_liked" : ""}`}
        onClick={() => _setLike()}
      >
        <IconLike />
      </div>
      <p className="like__counter">{like ? likesCount + 1 : likesCount}</p>
    </div>
  );
};

export default Like;

Like.propTypes = {
  likesCount: PropTypes.number,
  liked: PropTypes.bool
};
