"use strict";
var schildImporter_1 = require("./schildImporter");
function los() {
}
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
        schildIn.value = schildImporter.getUserListText();
    };
    console.log(file);
    reader.readAsText(file);
    return false;
});
//# sourceMappingURL=main.js.map