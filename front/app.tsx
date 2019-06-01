import * as React from 'react';
import { Layout, Menu, Icon, Input, Button, Divider } from 'antd';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Search = Input.Search;
const Textarea = Input.TextArea;


export default class Application extends React.Component {
    state = {
        collapsed: false
    }

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <Search 
                        style={{ padding: 10 }}
                        placeholder="输入搜索key"
                    />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>User</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>Team</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ background: 'yellow', display: 'flex', flexDirection: 'row' }}>
                        <span>Key:</span> <Input /> 
                        <Button type="primary">
                            Search
                        </Button>
                    </div>
                    <Divider />
                    <div style={{ flex: 1, background: 'green', display: 'flex', flexDirection: 'row' }}>
                        <span>value:</span> 
                        <Textarea /> 

                        <div style={{ display: 'flex',  flexDirection: 'column'}}>
                            <Button type="primary" icon="search">
                                Search
                            </Button>
                            <Button type="primary" icon="search">
                                Search
                            </Button>
                            <Button type="primary" icon="search">
                                Search
                            </Button>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>LevelDB explorer by bidao</Footer>
                </Layout>
            </Layout>
        );
    }
}