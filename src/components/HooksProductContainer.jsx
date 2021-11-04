import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyBread } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
  const numOfBread = useSelector((state) => state.breadReducer.numOfBreads);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Product</h1>
      <h3>
        Cakes: {numOfCakes}, Bread: {numOfBread}
      </h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(buyBread())}>Buy Bread</button>
    </div>
  );
};

export default HooksCakeContainer;
