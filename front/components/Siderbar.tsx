import * as React from 'react';
import { Tree } from '../interface/tree';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Input, Select } from 'antd';

const { Option } = Select;
const { Sider } = Layout;
const { SubMenu } = Menu;
const Search = Input.Search;

interface IProps {
    tree?: Tree;
}

@inject('tree')
@observer
export default class Siderbar extends React.Component<IProps> {

    getDBnames() {
        return (
            <Select defaultValue={"全部"}>
                <Option value={"all"}>全部</Option>
                {
                    this.props.tree.items.map((item) => <Option value={item.name}>{item.name}</Option>)
                }
            </Select>
        );
    }

    render() {
        return (
            <Sider style={{ width: 400, maxWidth: 400 }}>
            <Search
                style={{ padding: 10 }}
                placeholder=""
                addonBefore={this.getDBnames()}
            />
            <Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
                {
                    this.props.tree.items.map((item, i) => {
                        return (
                            <SubMenu
                                key={i}
                                title={
                                    <span>{item.name}</span>
                                }
                            >
                                {
                                    item.keys.map((key, index) => {
                                        return (
                                            <Menu.Item key={ i * 10 + index }>{key}</Menu.Item>
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
