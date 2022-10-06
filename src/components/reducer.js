import actions from "./action";

const initialState = {
  items: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_ITEMS:
      return {
        items: [...action.payload],
      };

    default:
      return state;
  }
};

export default Reducer;
