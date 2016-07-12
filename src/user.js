"use strict";
var User = (function () {
    function User() {
        this._login = "TestTheo";
    }
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map