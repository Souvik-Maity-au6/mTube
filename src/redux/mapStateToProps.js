export const mapToPropsUser = reduxStore => {
	return {
		userObj: {...reduxStore.userState},
	};
};
export const mapToPropsVideos = reduxStore => {
	return {
		allVideos: {...reduxStore.videoState},
	};
};

export const mapToPropsVideoPlay = reduxStore => {
	return {
		video: {...reduxStore.videoPlayState},
	};
};

export const mapToPropsChannel = reduxStore => {
	return {
		channel: {...reduxStore.channelState},
	};
};

export const mapToPropsPlaylist = reduxStore => {
	return {
		playlist: {...reduxStore.playlistState},
	};
};

export const mapToPropsSubscription = reduxStore => {
	return {
		subscriptionList: {...reduxStore.subscriptionState},
	};
};
