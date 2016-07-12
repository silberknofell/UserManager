export class User {
    get login():string {
        return this._login;
    }

    set login(value:string) {
        this._login = value;
    }
    vorname:string;
    nachname:string;
    id:number;
    kennwort:string;
    private _login:string;
    gruppe:string;

    constructor() {
        this._login = "TestTheo";
    }

    

}