import {UserActor} from "../interfaces/actorInterface";
import {User} from "./user";
/**
 * Created by Michael on 23.07.2016.
 */
export class UserActorText implements UserActor {

    private _lastAction:string;
    private _text:string;

    get lastAction():string {
        return this._lastAction;
    }

    get text():string {
        return this._text;
    }

    constructor() {
        this.resetText();
    }

    createUser(user:User) {
        this.addText("Lege Benutzer an: " + user.toString());
    }

    changeUser(userOld:User, userNew:User) {
        let differentAttrib:string[] = userOld.difference(userNew);
        if (differentAttrib.length==0) {
            return;
        }
        this.addText("Ändere Benutzer: " + userOld.toString() + " zu " + userNew.toString());
    }

    deleteUser(user:User) {
        this.addText("Lösche Benutzer: " + user.toString());
    }

    private addText(s:string) {
        this._lastAction = s;
        this._text = this._text + s + '\n';
    }

    resetText() {
        this._lastAction="";
        this._text="";
    }
}