export interface DbInfo {
    name: string;
    location: string;
}

export default interface IRemote {
    getAllKey: () => Promise<string[]>;
    get: (key: string) => Promise<string>;
    set: (key: string, value: string) => Promise<void>;
    getAllDb: () => Promise<DbInfo[]>;
    open: (thepath: string) => Promise<void>;
    getDbInfo: (name: string) => Promise<DbInfo | undefined> ;
}