import {User} from "./user";
/**
 * Created by Michael on 11.07.2016.
 */

export class Manager {
    user:User;

    constructor() {
        this.user = new User();
        alert("***");
    }

    public action() {
        alert(this.user.login);
    }
}

function los() {
    let m = new Manager();
    m.action();
}