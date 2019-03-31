import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Menu} from "antd";

class EmailMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" style={{userSelect: 'none'}}>
                {
                    this.props.isRead ? (
                        <Menu.Item key="toggleRead" onClick={this.props.toggleRead}>
                            <Icon type="issues-close"/>Mark as New
                        </Menu.Item>
                    ) : (
                        <Menu.Item key="isRead" onClick={this.props.toggleRead}>
                            <Icon type="check"/>Mark as Read
                        </Menu.Item>
                    )
                }
                {!this.props.isDeleted ? (
                    <Menu.Item key="delete" onClick={this.props.deleteEmail} style={{color: 'red'}}>
                        <Icon type="delete"/>Delete
                    </Menu.Item>
                ) : null}
            </Menu>
        );
    }
}

EmailMenu.propTypes = {
    isRead: PropTypes.bool,
    isDeleted: PropTypes.bool,
    deleteEmail: PropTypes.func,
    toggleRead: PropTypes.func
};

export default EmailMenu;
