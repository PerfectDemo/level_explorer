
export interface Info {
    key?: string;
    value?: string;
    name?: string;
    location?: string;
    typeName?: string;
    editType?: string;

    addKeyValue: (obj: Object) => void;
    goEdit: (obj: SimpleInfo) => void;
    goInit: (location: string, name: string) => void;
    handleChange: (keyValue) => void;
}


interface keyValue {
    key?: string;
    value?: string;
}

export interface SimpleInfo {
    key: string;
    value?: string;
    location: string;
    name: string;
}
