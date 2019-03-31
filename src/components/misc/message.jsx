import React from 'react';
import {Icon} from "antd";
import PropTypes from "prop-types";

const Message = (props) => {
    return (
        <div style={{
            display: 'flex',
            padding: 20,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            opacity: .5,
            width: '100%',
            height: '100%',
            color: props.color || 'inherit'
        }}>
            <div style={{fontSize: 48}}>
                <Icon type={props.iconType} />
            </div>
            <p>{props.text}</p>
        </div>
    );
};

Message.propTypes = {
    iconType: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Message;
