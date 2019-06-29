import * as React from 'react';
import { Layout } from 'antd';
import './index.less';
import Siderbar from './components/Siderbar';
import MyContent from './components/MyContent';
import { Provider } from 'mobx-react';
import './remote';

import stores from './stores';

export default class Application extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Provider {...stores}>
                <Layout style={{ minHeight: '100vh' }}>
                    <Siderbar />
                    <MyContent />
                </Layout>
            </Provider>
        );
    }
}
