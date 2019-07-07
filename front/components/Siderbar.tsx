import * as React from 'react';
import { Tree } from '../interface/tree';
import { Info } from '../interface/info';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Input, Select, Icon, Modal } from 'antd';

const { Option } = Select;
const { Sider } = Layout;
const { SubMenu } = Menu;
const Search = Input.Search;

interface IProps {
    tree?: Tree;
    info?: Info
}

@inject('tree', 'info')
@observer
export default class Siderbar extends React.Component<IProps> {

    state = {
        modalVisible: false,
        modalName: '',
        modalPath: ''
    }

    showAndReset() {
        this.setState({ modalName: '', modalPath: '', modalVisible: true });
    }

    uploadDir() {

    }

    async componentDidMount() {
        await this.props.tree.fetchItems();
    }

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

    async addDb() {
        await this.props.tree.addDb(this.state.modalName, this.state.modalPath);
        await this.props.tree.fetchItems();
        this.setState({ modalVisible: false });
    }

    async removeDb(name) {
        console.log('name:', name);
        await this.props.tree.removeDb(name);
        await this.props.tree.fetchItems();
    }

    render() {
        return (
        <Sider style={{ width: 400, maxWidth: 400 }}>
            <Search
                style={{ padding: 10 }}
                placeholder=""
                addonBefore={this.getDBnames()}
                addonAfter={<Icon type="plus" onClick={() => this.showAndReset() }/>}
            />

            <Menu theme="dark" mode="inline">
                {
                    this.props.tree.items.map((item, i) => {
                        return (
                            <SubMenu
                                key={i}
                                title={
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                                        onClick={ () => this.props.tree.getAllKey(item.location) }    
                                    >
                                        <span>{item.name}</span> 
                                        <div style={{ flex: 1}}></div>
                                        <Icon type="plus" style={{ justifySelf: 'flex-end' }}onClick={() => this.props.info.goInit(item.location, item.name) } />
                                        <Icon type="delete" onClick={ () => this.removeDb(item.name) }/>
                                    </div>
                                }
                            >
                               
                                {
                                    item.keys ? item.keys.map((key, index) => {
                                        return (
                                            <Menu.Item key={ i * 10 + index } onClick={
                                                () => this.props.info.goEdit({
                                                    key, name: item.name, location: item.location
                                                })
                                            }>{key}</Menu.Item>
                                        );
                                    }) : null
                                }
                            </SubMenu>
                        );
                    })
                }
            </Menu>
            <Modal title={"新增数据库"} visible={this.state.modalVisible} onOk={ () => this.addDb() }
                onCancel={() => this.setState({ modalVisible: false }) }
            >
                <Input value={this.state.modalName} onChange={ (e) => this.setState({ modalName: e.target.value })} 
                    placeholder={"名称"} style={{ marginBottom: '20px'}}/>
                <Input value={this.state.modalPath} onChange={ (e) => this.setState({ modalPath: e.target.value })} 
                    placeholder={"路径"} style={{ marginBottom: '20px'}}/>
            </Modal>
        </Sider>
        );
    }
}
