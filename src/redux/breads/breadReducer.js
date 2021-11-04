import { BUY_BREAD } from "./breadTypes";

const initialState = {
  numOfBreads: 20,
};

const breadReducer = (state = initialState, action) => {
  switch (action.type) {
    // Jika tipe action adalah BUY_CAKE
    case BUY_BREAD:
      return {
        ...state,
        numOfBreads: state.numOfBreads - 1,
      };
    default:
      return state;
  }
};

export default breadReducer;
