import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



const initialState = {
    searchQuery: ""
};

class Search extends Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.searchQuery) return;
        this.props.history.push(`/search/${this.state.searchQuery}`);
        this.setState(initialState);
    };
    render() {
        return (
            <div className="search-container">
                <form role="search" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Search" value={this.state.searchQuery} />
                    <button type="submit" className="search-button"><i className=" fa fa-search" aria-hidden="true" /></button>
                </form>
            </div>
        );
    }
}


export default withRouter(Search);

