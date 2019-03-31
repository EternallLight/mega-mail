import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from "../misc/message";
import EmailMenu from "./email-menu";
import EmailHeader from "./email-header";
import EmailBody from "./email-body";

class EmailContent extends Component {
    render() {
        return (
            <div style={{flex: 1, height: '100%', overflowY: 'scroll'}}>
                {this.props.email ? (
                    <>
                        <EmailMenu
                            isRead={this.props.email.isRead}
                            isDeleted={this.props.email.isDeleted}
                            deleteEmail={this.props.deleteEmail}
                            toggleRead={this.props.toggleRead}/>
                        <div style={{padding: 24}}>
                            <h1>{this.props.email.subject}</h1>
                            <EmailHeader email={this.props.email}/>
                            <EmailBody email={this.props.email}/>
                        </div>
                    </>
                ) : (
                    <Message iconType="mail" text="Please select an email"/>
                )}
            </div>
        );
    }
}

EmailContent.propTypes = {
    email: PropTypes.object,
    deleteEmail: PropTypes.func,
    toggleRead: PropTypes.func
};

export default EmailContent;
