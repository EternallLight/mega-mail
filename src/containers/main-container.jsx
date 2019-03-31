import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getEmails} from "../actions";

import SidebarContainer from "./sidebar-container";
import MailListContainer from "./email-list-container";
import EmailContentContainer from "./email-content-container";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        // Load mail list during the app initialization.
        props.getEmails();
    }

    render() {
        return (
            <div style={{display: 'flex', height: '100%'}}>
                <SidebarContainer/>
                <MailListContainer/>
                <EmailContentContainer />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getEmails: () => dispatch(getEmails())
    };
}

export default connect(
    null,
    mapDispatchToProps,
)(MainContainer);
