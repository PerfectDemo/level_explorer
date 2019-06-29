
import LevelUp from 'levelup';
import * as leveljs from 'level-js';

interface LevelOp {
    [key: string]: LevelOperator;
}

export default class LevelManager {
    levelOps: LevelOp = {};
    
    open(ipath: string) {
        if (!this.levelOps[ipath]) {
            this.levelOps[ipath] = new LevelOperator(ipath);
        }
        return this.levelOps[ipath];
    }

    get(name: string, key: string) {
        return this.levelOps[name].get(key);
    }

    set(name: string, key: string, value: string) {
        return this.levelOps[name].set(key, value);
    }

    getAllKey(name: string) {
        return this.levelOps[name].getAllKey();
    }
}


class LevelOperator {
    ipath: string = '';
    db: any;
    constructor(ipath: string) {
        this.db = LevelUp(leveljs(ipath));
        this.ipath = ipath;
    }

    async get(key: string) {
        return await this.db.get(key);
    }

    async set(key: string, value: string) {
        return await this.db.put(key, Buffer.from(value));
    }

    getAllKey() {
        const keys: string[] = [];
        for (let iter of this.db.iterator()) {
            keys.push(iter.key);
        }
        return keys;
    }
}