import {User} from "../src/user";
/**
 * Created by Michael on 23.07.2016.
 */


export interface UserActor {
    createUser(user:User);
    changeUser(userOld:User, userNew:User);
    deleteUser(user:User);
}