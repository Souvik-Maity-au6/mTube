import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import videoReducer from "./reducers/videoReducer";
import videoPlayReducer from "./reducers/videoPlayReducer";
import channelReducer from "./reducers/channelReducer";
import playlistReducer from "./reducers/playlistReducer";
import subscriptionReducer from "./reducers/subscriptionReducer";

const rootReducer = combineReducers({
	userState: userReducer,
	videoState: videoReducer,
	videoPlayState: videoPlayReducer,
	channelState: channelReducer,
	playlistState: playlistReducer,
	subscriptionState: subscriptionReducer,
});

export default rootReducer;
