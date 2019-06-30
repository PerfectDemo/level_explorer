import * as React from 'react';
import { Layout, Input, Button, Divider, Modal, Upload } from 'antd';
import { observer, inject } from 'mobx-react';
import { Info } from '../interface/info';

const { Header, Content, Footer } = Layout;
const Textarea = Input.TextArea;

interface IProps {
    info?: Info;
}

@inject('info')
@observer
export default class MyContent extends React.Component<IProps> {
    state = {
        visiable: true,
        confirmLoading: false
    }
    render() {
        const { key, value, name, location } = this.props.info;
        return(
            <Layout>
                <Header style={{ background: '#fff', paddingLeft: 20 }}>
                    <p>数据库名： {name} 位置： { location }</p>
                </Header>
                <Content style={{ margin: '24px 16px 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <span style={{ fontSize: 20 }}>Key:</span>
                        <Input style={{ marginLeft: 10, marginRight: 10 }} value={key}/>
                        <Button type="primary">
                            保存
                        </Button>
                    </div>
                    <Divider />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <span style={{ fontSize: 20 }}>Value:</span>
                        <Textarea style={{ marginLeft: 10, marginRight: 10 }} value={value}/>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type="primary"
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
