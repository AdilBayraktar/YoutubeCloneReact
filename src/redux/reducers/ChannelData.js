const channelReducer = (state = { getChannel: {} }, action) => {
  switch (action.type) {
    case "GET_CHANNEL":
      return {
        ...state,
        getChannel: action.payload,
      };

    default:
      return state;
  }
};

export default channelReducer;
