import fs from 'fs';
interface PartialType {
    parentSelector: string,
    orient?: 'head' | 'tail'
}

interface PartialContent {
    path: string
}

export default class Partial {
    type: PartialType
    content: PartialContent

    constructor( type: PartialType, content: PartialContent ){
        this.type = type;
        this.content = content;
    }

    toString(){
        const { path } = this.content;
        return fs.readFileSync( path ).toString();
    }
}