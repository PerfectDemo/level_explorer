import * as React from 'react';
import { Tree } from '../interface/tree';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Input } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
const Search = Input.Search;

interface IProps {
    tree?: Tree;
}

@inject('tree')
@observer
export default class Siderbar extends React.Component<IProps> {
    render() {
        return (
            <Sider style={{ width: 400, maxWidth: 400 }}>
            <Search
                style={{ padding: 10 }}
                placeholder="输入搜索key"
            />
            <Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
                {
                    this.props.tree.items.map((item, index) => {
                        return (
                            <SubMenu
                                key={index}
                                title={
                                    <span>{item.name}</span>
                                }
                            >
                                {
                                    item.keys.map((key, index) => {
                                        return (
                                            <Menu.Item key={index}>{key}</Menu.Item>
                                        );
                                    })
                                }
                            </SubMenu>
                        );
                    })
                }
            </Menu>
        </Sider>
        );
    }
}
