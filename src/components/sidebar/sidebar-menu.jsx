import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import PropTypes from "prop-types";
import logo from '../../images/logo.png'

import {INBOX, SENT, DRAFTS, TRASH} from '../../const/folders';

class SidebarMenu extends Component {
    render() {
        return (
            <Menu
                defaultSelectedKeys={[INBOX]}
                mode="inline"
                theme="dark"
                style={{width: 150, height: '100%'}}
            >
                <div style={{height: 64}}>
                    <img src={logo} style={{maxWidth: '100%', margin: '10px auto', padding: '5px 10px'}} alt="Logo" />
                </div>

                <Menu.Item key={INBOX} onClick={() => this.props.setSelectedFolder(INBOX)}>
                    <Icon type="inbox" />
                    <span>Inbox</span>
                </Menu.Item>
                <Menu.Item key={SENT} onClick={() => this.props.setSelectedFolder(SENT)}>
                    <Icon type="login"/>
                    <span>Sent</span>
                </Menu.Item>
                <Menu.Item key={DRAFTS} onClick={() => this.props.setSelectedFolder(DRAFTS)}>
                    <Icon type="form" />
                    <span>Drafts</span>
                </Menu.Item>
                <Menu.Item key={TRASH} onClick={() => this.props.setSelectedFolder(TRASH)}>
                    <Icon type="delete" />
                    <span>Trash</span>
                </Menu.Item>
            </Menu>
        );
    }
}

SidebarMenu.propTypes = {
    setSelectedFolder: PropTypes.func,
};

export default SidebarMenu;
