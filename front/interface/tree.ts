export interface Tree {
    items: TreeItem[];
    fetchItems: () => Promise<void>;
}

interface TreeItem {
    name: string;
    keys: string[];
}
