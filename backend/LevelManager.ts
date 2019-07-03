
import LevelUp from 'levelup';
import LevelDown from 'leveldown';

interface LevelOp {
    [key: string]: LevelOperator;
}

export default class LevelManager {
    levelOps: LevelOp = {};
    
    getOps(ipath: string) {
        if (!this.levelOps[ipath]) {
            this.levelOps[ipath] = new LevelOperator(ipath);
        }
        return this.levelOps[ipath];
    }

    get(ipath: string, key: string) {
        const levelOp = this.getOps(ipath);
        return levelOp.get(key);
    }

    set(ipath: string, key: string, value: string) {
        const levelOp = this.getOps(ipath);
        return levelOp.set(key, value);
    }

    getAllKey(ipath: string) {
        const levelOp = this.getOps(ipath);
        return levelOp.getAllKey();
    }
}


class LevelOperator {
    ipath: string = '';
    db: any;
    constructor(ipath: string) {
        this.db = LevelUp(LevelDown(ipath));
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