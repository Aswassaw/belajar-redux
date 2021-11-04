import React from "react";
import { connect } from "react-redux";
import { buyBread, buyCake } from "../redux";

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>Item: {item}</h2>
      <button onClick={buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cakeReducer.numOfCakes
    : state.breadReducer.numOfBreads;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : dispatch(buyBread());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(null, mapDispatchToProps)(ItemContainer);
