import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapToPropsUser } from '../redux/mapStateToProps';
import Search from "./Search";
import Login from './Login';
import '../styles/Navbar.css';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "none"
		};
	}


	closeSidePanel = (event) => {
		this.setState({ display: "none" });
	};

	openSidePanel = () => {

		// using local storage 
		// this.props.transfer("block");
		// ----------------------------------------------------------------

		this.setState({ display: "block" });
	};
	render() {
		return (
			<>
				{/*----------------------- Side panel ----------------------------------------------------------------*/}

				<div id="mySidenav" className="sidenav" style={{ display: this.state.display }}>
					<div className="closebtn" onClick={this.closeSidePanel}><i className="fa fa-times" aria-hidden="true"></i></div>
					<Link to="/"><i className="fa fa-home px-3" aria-hidden="true"></i>Home</Link>
					<Link to="/trending"><i className="fa fa-fire px-3" aria-hidden="true"></i>Trending</Link>
					<Link to="/subscription"><i className="fa fa-credit-card px-3" aria-hidden="true"></i>Subscriptions</Link>
					<a href="#demo" data-toggle="collapse"><i className="fa fa-archive px-3" aria-hidden="true"></i>Library</a>
					<div id="demo" className="collapse ml-5 library-link">
						<Link to="/playlist"><i className="fa fa-list px-3" aria-hidden="true"></i>Playlist</Link>
						<Link to="/"><i className="fa fa-history p-3" aria-hidden="true"></i>History</Link>
						<Link to="/"><i className="fa fa-clock-o px-3" aria-hidden="true"></i>Watch later</Link>
					</div>
				</div>

				{/* ----------------------------------Navbar --------------------------------------------------------------- */}

				<nav className="navbar navbar-expand-lg navbar-dark bg-color">
					<div className="menu-bar" onClick={this.openSidePanel}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></div>
					<Link className="navbar-brand " to="/">
						<img
							src="https://www.freelogodesign.org/file/app/client/thumb/e798b45c-cbda-467c-bc8d-b4966f9c57e2_200x200.png?1594747064130"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="logo"
							loading="lazy"
						/>
					</Link>
					<div className="search-bar mr-auto"><Search /></div>
					{!this.props.userObj.user ? <div className="mr-3"><Login /></div>
						: <Link to="/profile"><div className="profile-bar"><img src={this.props.userObj.user.imageUrl} width="50"
							height="50" alt="profile" srcSet="" /></div></Link>
					}
				</nav>
			</>
		);
	}
};





export default connect(mapToPropsUser)(Navbar);
