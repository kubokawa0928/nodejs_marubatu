"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Redis() {
        _classCallCheck(this, Redis);
    }

    _createClass(Redis, [{
        key: "createClient",
        value: function createClient() {
            var redis = require("redis");
            this.client = redis.createClient();
            this.client.on("error", function (err) {
                console.log(err);
            });
        }
    }, {
        key: "set",
        value: function set(key, value) {
            if (this.client == null) {
                console.log("set error");
            }

            this.client.set(key, value, function () {
                // callback
                console.log("SET " + key + ":" + value);
            });
        }
    }, {
        key: "get",
        value: function get(key) {
            if (this.client == null) return;

            this.client.get(key, function (err, val) {
                // callback
                if (err) return console.log(err);
                // value
                console.log("GET " + key + ":" + val);
            });
        }
    }]);

    return Redis;
}();