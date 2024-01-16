import React from "react";

import HeartImg from "./img/yesheart.png";
import EmptyHeartImg from "./img/noheart.png";

const HeartButton = ({ like, onClick }) => {
  return (
    <img
      src={like ? HeartImg : EmptyHeartImg}
      onClick={onClick}
      alt="Heart"
      style={{ width: "30px", height: "30px" }}
    />
  );
};

export default HeartButton;
