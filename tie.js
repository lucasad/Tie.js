/*
 * Copyright 2013 Lucas A. Dohring <lucas@dohring.tk>
 * Licensed under the EUPL V.1.1
 */

(function (exports) {
    "use strict";
    var map = function (root, context) {
        for (var key in context) {
            var node = root.find('.' + key);
            var data = context[key];
            tie(node, data, (typeof data==="object") ? data : context);
        }
    };


    var tie = function (node, data, context) {
        switch (data.constructor) {
            case Array:
                var inner = node.children();
                node.empty();
                data.forEach(function (item) {
                    var instance = inner.clone();
                    tie(instance, item, context);
                    node.append(instance);
                });
                inner.remove();
                break;
            case Object:
                map.call(this, node, data);
                break;
            case Function:
                data=data.call(context);
                console.log(this)
                node.html(data);
                break;
            default:
                node.html(data.toString());
                break;
            case String:
                node.html(data);
                break;
        }
    };
    exports.tie = function (node, data) {
        tie(node, data, data);
    };
})((typeof module === "undefined") ? window : module.exports);
