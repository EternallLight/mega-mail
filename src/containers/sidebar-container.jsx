import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setSelectedFolder} from "../actions";
import SidebarMenu from '../components/sidebar/sidebar-menu';

class SidebarContainer extends Component {
    setSelectedFolder = (folder) => {
        this.props.setSelectedFolder(folder)
    };

    render() {
        return (
            <>
                <SidebarMenu setSelectedFolder={this.setSelectedFolder} />
            </>
        );
    }
}

SidebarContainer.propTypes = {
    selectedFolder: PropTypes.string,
};

const mapStateToProps = (state) => ({
    selectedFolder: state.selectedFolder
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedFolder: (folder) => dispatch(setSelectedFolder(folder))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarContainer);
