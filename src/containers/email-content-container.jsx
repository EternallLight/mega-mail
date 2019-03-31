import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MailContent from "../components/email-content/email-content";
import {setRead, deleteEmail} from "../actions";
import {connect} from "react-redux";

class EmailContentContainer extends Component {
    toggleRead = () => {
        this.props.setReadEmail(this.props.selectedEmail, !this.props.selectedEmail.isRead);
    };

    deleteEmail = () => {
        this.props.deleteEmail(this.props.selectedEmail, this.props.selectedFolder);
    };

    render() {
        return (
            <MailContent email={this.props.selectedEmail}
                         toggleRead={this.toggleRead}
                         deleteEmail={this.deleteEmail}/>
        );
    }
}

EmailContentContainer.propTypes = {
    selectedEmail: PropTypes.object
};

const mapStateToProps = (state) => ({
    selectedEmail: state.selectedEmail,
    selectedFolder: state.selectedFolder,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setReadEmail: (email, isRead) => dispatch(setRead(email, isRead)),
        deleteEmail: (email, selectedFolder) => dispatch(deleteEmail(email, selectedFolder))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailContentContainer);

