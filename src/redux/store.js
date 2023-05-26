import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeReducer from "./reducers/HomeData";
import detailsReducer from "./reducers/VidioDetails";
import channelReducer from "./reducers/ChannelData";
import relatedVideosReducer from "./reducers/RelatedVideosData";
import sideNavReducer from "./reducers/SidenavToggler";

let initialState = {};

let reducers = combineReducers({
  getVideos: homeReducer,
  getVideo: detailsReducer,
  getChannel: channelReducer,
  getRelatedVideos: relatedVideosReducer,
  toggle: sideNavReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
