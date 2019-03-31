import React from 'react';
import {Skeleton} from 'antd';

class EmailListLoading extends React.Component {
    render() {
        const content = [];
        for (let i = 0; i < 15; i++) {
            content.push(<div key={i}>
                <Skeleton active title={true} paragraph={{ rows: 4 }} />
            </div>)
        }
        return <>
            {content}
        </>;
    }
}

export default EmailListLoading;

