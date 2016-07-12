"use strict";
var user_1 = require("./user");
var Manager = (function () {
    function Manager() {
        this.user = new user_1.User();
        alert("***");
    }
    Manager.prototype.action = function () {
        alert(this.user.login);
    };
    return Manager;
}());
exports.Manager = Manager;
function los() {
    var m = new Manager();
    m.action();
}
//# sourceMappingURL=main.js.map