import * as React from 'react';
import { Layout, Input, Button, Divider, Modal, Upload } from 'antd';
import { observer, inject } from 'mobx-react';
import { Info } from '../interface/info';
import { Tree } from '../interface/tree';

const { Header, Content, Footer } = Layout;
const Textarea = Input.TextArea;

interface IProps {
    info?: Info;
    tree?: Tree;
}

@inject('info', 'tree')
@observer
export default class MyContent extends React.Component<IProps> {
    state = {
        visiable: true,
        confirmLoading: false,
        localKey: '',
        localValue: ''
    }

    async commitKeyValue() {
        const { tree, info } = this.props;
        const { editType, key, value, location } = info;

        if (editType === 'add') {
            await info.addKeyValue({
                location, key, value
            });

            debugger
            await tree.getAllKey(location);
        }
    }

    render() {
        const { key, value, name, location, typeName } = this.props.info;
        return(
            <Layout>
                <Header style={{ background: '#fff', paddingLeft: 20 }}>
                    <p>
                        <strong style={{ fontSize: 18, marginRight: 10 }}>{ typeName }</strong> 
                        数据库名： {name} 位置： { location }
                    </p>
                </Header>
                <Content style={{ margin: '24px 16px 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <span style={{ fontSize: 20 }}>Key:</span>
                        <Input style={{ marginLeft: 10, marginRight: 10 }} value={key}
                            onChange={ (e) => this.props.info.handleChange({ key: e.target.value })}
                            />
                        <Button type="primary" onClick={ () => this.commitKeyValue() }>
                            保存
                        </Button>
                    </div>
                    <Divider />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <span style={{ fontSize: 20 }}>Value:</span>
                        <Textarea style={{ marginLeft: 10, marginRight: 10 }} value={value}
                            onChange={ (e) => this.props.info.handleChange({ value: e.target.value }) }
                        />

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type="primary" value={this.state.localKey}
                                style={{ marginBottom: 10 }}
                            >
                                保存
                            </Button>
                            <Button type="primary"
                                style={{ marginBottom: 10 }}
                            >
                                JSON格式化
                            </Button>
                            <Button type="primary"
                                style={{ marginBottom: 10 }}
                            >
                                RAW
                            </Button>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>LevelDB explorer by bidao</Footer>
            </Layout>
        );
    }
}
