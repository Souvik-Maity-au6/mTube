import React from 'react';
import useForceUpdate from 'use-force-update';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import '../styles/SidePanel.css';

const SidePanel = () => {


    const forceUpdate = useForceUpdate();

    const propsTransfer = (toggle) => {

        localStorage.setItem("display", toggle);
        forceUpdate();
    };

    const closeSidePanel = (event) => {
        localStorage.setItem("display", "none");
        forceUpdate();
    };
    return (


        // using local storage 
        //------------------------
        <>
            <div id="mySidenav" className={`${localStorage.getItem("display")} sidenav`} style={{ display: (localStorage.getItem("display") !== undefined ? localStorage.getItem("display") : "none") }}>
                <div className="closebtn" onClick={closeSidePanel}><i className="fa fa-times" aria-hidden="true"></i></div>
                <Link to="/"><i className="fa fa-home px-3" aria-hidden="true"></i>Home</Link>
                <Link to="/trending"><i className="fa fa-fire px-3" aria-hidden="true"></i>Trending</Link>
                <Link to="/"><i className="fa fa-credit-card px-3" aria-hidden="true"></i>Subscriptions</Link>
                <Link to="/"><i className="fa fa-archive px-3" aria-hidden="true"></i>Library</Link>
            </div>
            <Navbar transfer={propsTransfer} />
        </>
    );
};

export default SidePanel;
