import IRemote, { DbInfo } from '../common/remote';
import LocalDb from './LocalDb';

const localdb = new LocalDb();

class Operator implements IRemote {

    [key: string]: any;

    public level = null;

    constructor() {
        this.level = null;
      
        console.log(233333);
    }

    async get(key: string) {
        return "string" + key;
    }

    async set(key: string, value: string) {

    }

    async open(name: string) {
        
    }

    async getAllDb(): Promise<DbInfo[]> {
        console.log(this);
        return localdb.getAllDb();
    }

    async getDbInfo(name: string): Promise<DbInfo | undefined > {
        return localdb.getDbInfo(name);
    }

    async addDb(name: string, location: string): Promise<void> {
        return localdb.setDb(name, location);
    }

    async removeDb(name: string) : Promise<void> {
        return localdb.removeDb(name);
    }
    async getAllKey(): Promise<string[]> {
        return [];
    }
}

export default new Operator();