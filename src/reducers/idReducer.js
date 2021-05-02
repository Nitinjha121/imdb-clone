const intialState = {
  byId: {},
  isLoading: true,
};

const idReducer = function (state = intialState, action) {
  switch (action.type) {
    case "BY_ID":
      return { ...state, byId: action.payload.byId.data, isLoading: false };

    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default idReducer;
