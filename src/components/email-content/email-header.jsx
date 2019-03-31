import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EmailHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDate: moment(props.email.date, 'YYYY-MM-DDTHH:mm:ss Z ZZ').format('MMM DD')
        }
    }

    render() {
        return (
            <div style={{width: '100%', position: 'relative', padding: '6px 0', marginBottom: 12}}>
                <h4 style={{paddingRight: 40}}>{this.props.email.from}</h4>
                <span style={{fontSize: 12, opacity: .7, position: 'absolute', top: 6, right: 0}}>{this.state.displayDate}</span>
            </div>
        );
    }
}

EmailHeader.propTypes = {
    email: PropTypes.object
};

export default EmailHeader;
