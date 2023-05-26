const relatedVideosReducer = (state = { getRelatedVideos: [] }, action) => {
  switch (action.type) {
    case "RELATED_VIDEOS":
      return {
        getRelatedVideos: action.payload,
      };

    default:
      return state;
  }
};

export default relatedVideosReducer;
