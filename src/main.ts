import {SchildImporter} from "./schildImporter";

function los() {
}

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
        schildIn.value = schildImporter.getUserListText();
    };
    console.log(file);
    reader.readAsText(file);

    return false;
});