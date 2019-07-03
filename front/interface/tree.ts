export interface Tree {
    items: TreeItem[];
    fetchItems: () => Promise<void>;
    addDb: (name: string, location: string) => Promise<void>;
    removeDb: (name: string) => Promise<void>;
    getAllKey: (ipath: string) => Promise<void>;
}

interface TreeItem {
    name: string;
    location: string;
    keys: string[];
}
