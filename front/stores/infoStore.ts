import { Info, SimpleInfo } from '../interface/info';
import { observable, action, values, runInAction } from 'mobx';
export default class InfoStore implements Info {
    @observable key = 'key';
    @observable value = 'value';
    @observable name = 'db1';
    @observable location = '/user/data/db1';

    @observable typeName= '新增';
    @observable editType = 'edit';

    @action goEdit(info: SimpleInfo) {
        console.log('info:', info);
        const { key, value, name, location } = info;

        this.typeName = '修改';
        this.editType = 'edit';

        this.key = key;
        this.name = name;
        this.location = location;

        window.get(this.location, this.key).then((value) => {
            runInAction(() => {
                this.value = value
            });
        })
    }

    @action async addKeyValue() {
        console.log(this.location, this.key, this.value);
        await window.set(this.location, this.key, this.value);
    }

    @action goInit(location: string, name: string) {
        this.typeName = '新增';
        this.editType = 'add';

        this.key = '';
        this.value = '';
        
        this.name = name;
        this.location = location;
    }

    @action handleChange({ key, value }) {
        key ? this.key = key : void 0;
        value ? this.value = value : void 0;
    }

    
}
