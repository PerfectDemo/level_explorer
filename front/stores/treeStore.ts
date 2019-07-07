import { Tree } from '../interface/tree';
import { observable, action, runInAction } from 'mobx';

export default class TreeStore implements Tree {
    @observable items = [];

    @action async fetchItems() {
        const items = await window.getAllDb();
        runInAction(() => {
            this.items = items;
        });
    }

    @action async addDb(name: string, location: string) {
        await window.addDb(name, location);
    }

    @action async removeDb(name: string) {
        await window.removeDb(name);
    }

    @action async getAllKey(location: string) {
        console.log('locatins: getALlKey', location);
        const keys = await window.getAllKey(location);
        for (let i = 0; i < this.items.length; i ++) {
            if (this.items[i].location === location) {
                runInAction(() => this.items[i].keys = keys);
            }
        }
    }
}
