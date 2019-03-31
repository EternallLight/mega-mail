import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EmailPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDate: moment(props.email.date, 'YYYY-MM-DDTHH:mm:ss Z ZZ').format('MMM DD')
        }
    }

    handleClick = () => {
        this.props.onClick(this.props.email);
    };

    render() {
        const {email, isSelected, isRead} = this.props;
        return (
            <div className={`email-preview ${isSelected ? 'is-selected' : ''} ${!isRead ? 'is-unread' : ''}`}
                 style={{padding: '12px 24px', borderBottom: '1px solid #ddd', userSelect: 'none', position: 'relative'}}
                 onClick={this.handleClick}>
                <h3 className="text-truncate" style={{marginBottom: 5, fontSize: 15, paddingRight: 40}}>{email.from}</h3>
                <span style={{fontSize: 12, opacity: .7, position: 'absolute', top: 15, right: 24}}>{this.state.displayDate}</span>
                <h4 className="text-truncate" style={{marginBottom: 0}}>{email.subject}</h4>
                <div style={{maxHeight: 65, overflow: 'hidden', opacity: isRead ? .8 : 1}}>{email.preview}</div>
            </div>
        );
    }
}

EmailPreview.propTypes = {
    email: PropTypes.object,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};


export default EmailPreview;
