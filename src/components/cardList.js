// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Card from "./card";

const CardList = ({ filteredData }) => {
  return (
    <main className="cardList">
      {filteredData.length > 0 &&
        filteredData.map((item, index) => {
          return <Card key={index} item={item} image={`image${item.id}`} />;
        })}
    </main>
  );
};

CardList.propTypes = {
  filteredData: PropTypes.array
};

export default CardList;
