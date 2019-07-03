import { Tree } from '../interface/tree';
import { observable, action } from 'mobx';

export default class TreeStore implements Tree {
    @observable items = [];

    @action async fetchItems() {
        const items = await window.getAllDb();
        this.items = items;
        console.log(this.items);
    }

    @action async addDb(name: string, location: string) {
        await window.addDb(name, location);
    }

    @action async removeDb(name: string) {
        await window.removeDb(name);
    }

    @action async getAllKey(location: string) {
        const keys = await window.getAllKey(location);
        for (let i = 0; i < this.items.length; i ++) {
            if (this.items[i].location === location) {
                this.items[i].keys = keys;
            }
        }
    }
}
