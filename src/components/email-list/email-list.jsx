import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EmailListLoading from "./email-list-loading";
import EmailPreview from "./email-preview";
import Message from "../misc/message";

class EmailList extends Component {

    onEmailPreviewClick = (email) => {
        this.props.setSelectedEmail(email);
    };

    renderList() {
        if (this.props.isLoading && !this.props.emailList.length) {
            return <EmailListLoading/>
        } else if (this.props.hasError) {
            return <Message iconType="exclamation-circle" text="An error occurred while requesting the mail"
                            color="red"/>;
        } else if (!this.props.emailList.length) {
            return <Message iconType="inbox" text="You have no emails in this folder"/>
        } else {
            return this.props.emailList.map((email) => (
                <EmailPreview
                    key={email._id}
                    onClick={this.onEmailPreviewClick}
                    isSelected={!!(this.props.selectedEmail && email._id === this.props.selectedEmail._id)}
                    isRead={email.isRead}
                    email={email}/>
            ))
        }
    }

    render() {
        const overflowY = this.props.isLoading ? 'hidden' : 'scroll';
        return (
            <div style={{
                width: 250,
                maxHeight: '100%',
                overflowY,
                borderRight: '1px solid #ddd',
                background: '#f9f9f9'
            }}>
                <h3 style={{padding: '24px 24px 12px', fontWeight: 'bold'}}>{this.props.selectedFolder}</h3>
                {this.renderList()}
            </div>
        );
    };
}

EmailList.propTypes = {
    selectedFolder: PropTypes.string,
    emailList: PropTypes.array,
    setSelectedEmail: PropTypes.func,
    selectedEmail: PropTypes.object,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
};

export default EmailList;
