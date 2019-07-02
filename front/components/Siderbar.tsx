import * as React from 'react';
import { Tree } from '../interface/tree';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Input, Select, Icon, Modal } from 'antd';
import MyUpload from './MyUpload';


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

    state = {
        modalVisible: true,
        modalName: '',
        modalPath: '',
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
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <span>{item.name}</span>
                                        <Icon type="delete" onClick={ () => this.removeDb(item.name) }/>
                                    </div>
                                }
                            >
                               
                                {
                                    item.keys ? item.keys.map((key, index) => {
                                        return (
                                            <Menu.Item key={ i * 10 + index }>{key}</Menu.Item>
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
