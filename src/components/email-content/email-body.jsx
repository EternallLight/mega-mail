import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EmailBody extends Component {
    render() {
        return (
            <>{this.props.email.body}</>
        );
    }
}

EmailBody.propTypes = {
    email: PropTypes.object
};

export default EmailBody;
