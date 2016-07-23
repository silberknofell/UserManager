import {ObjectWithId} from "../interfaces/idInterface";
/**
 * Created by Michael on 16.07.2016.
 */
export interface TwoObjects {
    object1;
    object2;
}

export class ListComparer {

    private _hash1:ObjectWithId[] = [];
    private _hash2:ObjectWithId[] = [];

    private _only1:ObjectWithId[];
    private _only2:ObjectWithId[];
    private _both:ObjectWithId[];

    get only1():ObjectWithId[] {
        return this._only1;
    }

    get only2():ObjectWithId[] {
        return this._only2;
    }

    get both():TwoObjects[] {
        return this._both.map(o => {
            let id = o.id;
            return {
                object1: this._hash1[id],
                object2: this._hash2[id],
            }
        })
    }

    constructor(private list1:ObjectWithId[],
                private list2:ObjectWithId[]) {
        this.fillHash(list1, this._hash1);
        this.fillHash(list2, this._hash2);

        this.createLists();
    }

    private fillHash(list:ObjectWithId[], hash:ObjectWithId[]) {
        hash.length = 0;
        list.forEach(o => hash[o.id] = o);
    }


    private createLists() {
        this.buildBothList();
        this.buildOnly1List();
        this.buildOnly2List();
    }

    private buildBothList() {
        this._both = [];
        this._hash1
            .filter(o => !!this._hash2[o.id])
            .forEach(o => this._both.push(o));
    }

    private buildOnly1List() {
        this._only1 = [];
        this._hash1
            .filter(o => !this._hash2[o.id])
            .forEach(o => this._only1.push(o));
    }

    private buildOnly2List() {
        this._only2 = [];
        this._hash2
            .filter(o => !this._hash1[o.id])
            .forEach(o => this._only2.push(o));
    }
}

function test() {
    let test1 = [
        {id: 7, text: "lalala"},
        {id: 5, text: "lalala"},
        {id: 3, text: "lalala"},
        {id: 999, text: "lalala"}
    ];
    let test2 = [
        {id: 7, text: "lalala"},
        {id: 5, text: "lalala"},
        {id: 2, text: "lalala"},
        {id: 998, text: "lalala"}
    ];

    let lc:ListComparer = new ListComparer(test1, test2);
    console.log(lc);
}