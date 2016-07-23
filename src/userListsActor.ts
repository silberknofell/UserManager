import {User} from "./user";
import {UserActor} from "../interfaces/actorInterface";
import {ListComparer} from "./listComparer";
import {UserActorText} from "./userActor";
/**
 * Created by Michael on 23.07.2016.
 */
export class UserListsActor {
    public static act(schildList:User[], serverList:User[], userActor:UserActorText) {
        let listComparer:ListComparer = new ListComparer(schildList, serverList);
        listComparer.only1.forEach(u => userActor.createUser(<User> u));
        listComparer.only2.forEach(u => userActor.deleteUser(<User> u));

        listComparer.both.forEach( o => {
            let userOld = o.object2;
            let userNew = o.object1;
            userActor.changeUser(userOld, userNew);
        });
        console.log(userActor.text);

    }

}