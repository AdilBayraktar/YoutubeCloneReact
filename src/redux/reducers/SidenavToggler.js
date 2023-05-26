const sideNavReducer = (state = { toggle: true }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        toggle: action.payload,
      };

    default:
      return state;
  }
};

export default sideNavReducer;
