import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
// Load pages

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TrendingPage from "./pages/TrendingPage";
import ChannelPage from "./pages/ChannelPage";
import videoDetailsPage from "./pages/VideoDetailsPage";
import SearchResultPage from "./pages/SearchResultPage";
import PlaylistPage from "./pages/PlaylistPage";
import SubscriptionPage from "./pages/SubscriptionPage";

// Load components
import Navbar from "./components/Navbar";
import RouteProtection from "./components/RouteProtection";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<RouteProtection
					exact
					path="/subscription"
					component={SubscriptionPage}
				/>
				<RouteProtection exact path="/playlist" component={PlaylistPage} />
				<Route exact path="/search/:searchQuery" component={SearchResultPage} />
				<RouteProtection exact path="/trending" component={TrendingPage} />
				<RouteProtection
					exact
					path="/channel/:channelId"
					component={ChannelPage}
				/>
				<Route
					exact
					path="/play_video/:videoId/:channelId"
					component={videoDetailsPage}
				/>
				<RouteProtection path="/profile" component={ProfilePage} />
				<Route path="/" component={HomePage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;

