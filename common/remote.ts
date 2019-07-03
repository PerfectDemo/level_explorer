export interface DbInfo {
    name: string;
    location: string;
}

export default interface IRemote {
    getAllKey: (location: string) => Promise<string[]>;
    get: (ipath: string, key: string) => Promise<string>;
    set: (ipath: string, key: string, value: string) => Promise<void>;
    getAllDb: () => Promise<DbInfo[]>;
    open: (thepath: string) => Promise<void>;
    getDbInfo: (name: string) => Promise<DbInfo | undefined> ;
    addDb: (name: string, location: string) => Promise<void>;
    removeDb: (name: string) => Promise<void>;
}