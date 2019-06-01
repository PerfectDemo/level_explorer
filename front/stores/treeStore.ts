import { Tree } from '../interface/tree';
import { observable, action } from 'mobx';
export default class TreeStore implements Tree {
    @observable items = [
        {
            name: 'db1',
            keys: [ 'key1', 'key2' ],
        },
        {
            name: 'db2',
            keys: [ 'key1', 'key2' ],
        },
    ];

    @action async getItems(items) {
        this.items = items;
    }
}
