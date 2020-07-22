import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subscriptionFetch } from '../redux/actions/subscriptionActions';
import { mapToPropsSubscription } from '../redux/mapStateToProps';
import Subscription from '../components/Subscription';
import '../styles/SubscriptionPage.css';

class SubscriptionPage extends Component {

    state = {
        pageToken: null,
    };
    componentDidMount() {
        this.props.subscriptionFetch();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pageToken !== this.state.pageToken) {
            this.props.subscriptionFetch(this.state.pageToken);
        }
        // console.log(prevState);
    }

    handlePrev = (event) => {
        this.setState({ pageToken: event.target.value });
    };
    handleNext = (event) => {
        this.setState({ pageToken: event.target.value });
        // console.log(this.state.pageToken);
    };

    render() {
        return (
            <>
                {
                    this.props.subscriptionList.subscription ?
                        <div className="next-prev">
                            {this.props.subscriptionList.subscription.prevPageToken
                                ? <button type="submit" onClick={this.handlePrev} className="previous div-style" value={this.props.subscriptionList.subscription.prevPageToken}>&laquo; Previous</button>
                                : null}
                            <button type="submit" onClick={this.handleNext} className="next div-style" value={this.props.subscriptionList.subscription.nextPageToken}>Next &raquo;</button>
                        </div> : null
                }
                <div className="subscription-page-container">
                    {this.props.subscriptionList.subscription ?
                        this.props.subscriptionList.subscription.items.map(item => <Subscription key={item.id} channel={item} />)
                        : <h1>Loading...</h1>}
                </div>
            </>
        );
    }
}

export default connect(mapToPropsSubscription, { subscriptionFetch })(SubscriptionPage); 