import { Tree } from '../interface/tree';
import { observable, action } from 'mobx';

export default class TreeStore implements Tree {
    @observable items = [];

    @action async fetchItems() {
        const items = await window.getAllDb();
        console.log(items);
        this.items = items;
    }

    @action async addDb(name: string, location: string) {
        await window.addDb(name, location);
    }
}
