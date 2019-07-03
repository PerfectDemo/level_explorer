import IRemote, { DbInfo } from '../common/remote';
import LocalDb from './LocalDb';
import LevelManager from './LevelManager';

const localdb = new LocalDb();
const levelManager = new LevelManager(); 

class Operator implements IRemote {

    [key: string]: any;

    async get(ipath: string, key: string) {
        return await levelManager.get(ipath, key);
    }

    async set(ipath: string, key: string, value: string) {
        return await levelManager.set(ipath, key, value);
    }

    async getAllKey(ipath: string): Promise<string[]> {
        return await levelManager.getAllKey(ipath);
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
   
}

export default new Operator();