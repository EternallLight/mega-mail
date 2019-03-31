import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {setSelectedEmail} from "../actions";
import {connect} from "react-redux";
import EmailList from "../components/email-list/email-list";

class EmailListContainer extends Component {
    state = {
        emailList: []
    };

    static getDerivedStateFromProps(props) {
        return {
            emailList: props.mail[props.selectedFolder] || []
        }
    }

    render() {
        return (
            <EmailList selectedFolder={this.props.selectedFolder}
                       emailList={this.state.emailList}
                       isLoading={this.props.isLoading}
                       hasError={this.props.hasError}
                       setSelectedEmail={this.props.setSelectedEmail}
                       selectedEmail={this.props.selectedEmail}
            />
        );
    }
}

EmailListContainer.propTypes = {
    selectedFolder: PropTypes.string
};

const mapStateToProps = (state) => ({
    mail: state.mail,
    selectedEmail: state.selectedEmail,
    selectedFolder: state.selectedFolder,
    isLoading: state.isLoading,
    hasError: state.hasError
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedEmail: (email) => dispatch(setSelectedEmail(email))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailListContainer);
