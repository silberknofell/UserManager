import {SchildImporter} from "./schildImporter";
import {ServerImporter} from "./serverImporter";
import {UserListsActor} from "./userListsActor";
import {UserActorText} from "./userActor";
import {User} from "./user";

var schildList:User[];
var serverList:User[];

function los() {
    UserListsActor.act(schildList, serverList, new UserActorText());
}

var losButton =  <HTMLButtonElement> document.getElementById("los");
losButton.addEventListener('click', function (e) {
    los();
});

var schildIn = <HTMLTextAreaElement> document.getElementById("schildIn");
console.log(schildIn);
schildIn.addEventListener('dragover',function () { this.className = 'hover'; return false; });
schildIn.addEventListener('dragend', function () { this.className = ''; return false; });
schildIn.addEventListener('drop', function (e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0],
        reader = new FileReader();
    reader.onload= function (event) {
        console.log(event.target);
        let schildImporter = new SchildImporter(this.result);
        schildIn.value = schildImporter.getListText();
        schildList = schildImporter.getList();
    };
    console.log(file);
    reader.readAsText(file);

    return false;
});


var serverIn = <HTMLTextAreaElement> document.getElementById("serverIn");
console.log(serverIn);
serverIn.addEventListener('dragover',function () { this.className = 'hover'; return false; });
serverIn.addEventListener('dragend', function () { this.className = ''; return false; });
serverIn.addEventListener('drop', function (e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0],
        reader = new FileReader();
    reader.onload= function (event) {
        console.log(event.target);
        let serverImporter = new ServerImporter(this.result);
        serverIn.value = serverImporter.getListText();
        serverList = serverImporter.getList();
    };
    console.log(file);
    reader.readAsText(file);

    return false;
});

