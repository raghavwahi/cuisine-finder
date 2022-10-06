const actions = {
  FETCH_ITEMS: "FETCH_ITEMS",
  fetchItems: (payload) => {
    return async (dispatch) => {
      const result = await fetch("http://192.168.29.30:6556/items", {
        method: "GET",
      });

      const data = await result.json();
      dispatch(actions.StoreItems(data));
    };
  },

  STORE_ITEMS: "STORE_ITEMS",
  StoreItems: (payload) => {
    return {
      type: actions.STORE_ITEMS,
      payload,
    };
  },
};

export default actions;
