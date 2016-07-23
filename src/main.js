"use strict";
var schildImporter_1 = require("./schildImporter");
var serverImporter_1 = require("./serverImporter");
var userListsActor_1 = require("./userListsActor");
var userActor_1 = require("./userActor");
var schildList;
var serverList;
function los() {
    userListsActor_1.UserListsActor.act(schildList, serverList, new userActor_1.UserActorText());
}
var losButton = document.getElementById("los");
losButton.addEventListener('click', function (e) {
    los();
});
var schildIn = document.getElementById("schildIn");
console.log(schildIn);
schildIn.addEventListener('dragover', function () { this.className = 'hover'; return false; });
schildIn.addEventListener('dragend', function () { this.className = ''; return false; });
schildIn.addEventListener('drop', function (e) {
    this.className = '';
    e.preventDefault();
    var file = e.dataTransfer.files[0], reader = new FileReader();
    reader.onload = function (event) {
        console.log(event.target);
        var schildImporter = new schildImporter_1.SchildImporter(this.result);
        schildIn.value = schildImporter.getListText();
        schildList = schildImporter.getList();
    };
    console.log(file);
    reader.readAsText(file);
    return false;
});
var serverIn = document.getElementById("serverIn");
console.log(serverIn);
serverIn.addEventListener('dragover', function () { this.className = 'hover'; return false; });
serverIn.addEventListener('dragend', function () { this.className = ''; return false; });
serverIn.addEventListener('drop', function (e) {
    this.className = '';
    e.preventDefault();
    var file = e.dataTransfer.files[0], reader = new FileReader();
    reader.onload = function (event) {
        console.log(event.target);
        var serverImporter = new serverImporter_1.ServerImporter(this.result);
        serverIn.value = serverImporter.getListText();
        serverList = serverImporter.getList();
    };
    console.log(file);
    reader.readAsText(file);
    return false;
});
//# sourceMappingURL=main.js.map