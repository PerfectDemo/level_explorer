import IRemote, { DbInfo } from '../common/remote';
class Operator implements IRemote {

    [key: string]: any;

    public level = null;

    constructor() {
        this.level = null;
    }

    async get(key: string) {
        return "string" + key;
    }

    async set(key: string, value: string) {

    }

    async getAllDb(): Promise<string[]> {
        return [];
    }

    async getDbInfo(): Promise<DbInfo> {
        return { name: "1", location: "2" };
    }

    async open() {

    }

    async getAllKey(): Promise<string[]> {
        return [];
    }
}

export default new Operator();