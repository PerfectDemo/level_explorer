import { Info } from '../interface/info';
import { observable, action, values } from 'mobx';
export default class InfoStore implements Info {
    @observable key = 'key';
    @observable value = 'value';
    @observable name = 'db1';
    @observable location = '/user/data/db1';

    @action async setInfo({ key, value, name, location }) {
        this.key = key;
        this.value = value;
        this.name = name;
        this.location = location;
    }
}
