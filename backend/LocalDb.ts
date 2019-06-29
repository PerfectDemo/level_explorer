import * as os from 'os';
import * as path from 'path';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as lowdb from 'lowdb';
import { DbInfo } from '../common/remote';

const homeDir = os.homedir();
const dbFile = 'levelex.json';

const adapter = new FileSync(path.join(homeDir, dbFile));

class LocalDb {
    public db: any;
    constructor() {
        this.db = lowdb(adapter);
        this.init();
    }

    init() {
        this.db.defaults({ dbs: [] }).write();
    }

    getDbInfo(name: string): DbInfo | undefined {
        const dbs: DbInfo[] = this.getAllDb();
        return dbs.find(item => item.name === name);
    }

    getAllDb(): DbInfo[] {
        return this.db.get('dbs');
    }

    setDb(name: string, location: string) {
        this.db.get('dbs').push({ name, location }).write();
    }
}

export default LocalDb;