export interface Tree {
    items: TreeItem[];
    fetchItems: () => Promise<void>;
    addDb: (name: string, location: string) => Promise<void>;
    removeDb: (name: string) => Promise<void>;
}

interface TreeItem {
    name: string;
    keys: string[];
}
