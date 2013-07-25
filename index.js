/*
 * Copyright 2013 Lucas A. Dohring <lucas@dohring.tk>
 * Licensed under the EUPL V.1.1
 */

(function () {
    "use strict";
    var map = function (root, context) {
        for (var key in context) {
            var node = root.find('.' + key);
            var data = context[key];
            tie(node, data);
        }
    };


    var tie = function (node, data) {
        switch (data.constructor) {
            case Array:
                var inner = node.children();
                node.empty();
                data.forEach(function (item) {
                    var instance = inner.clone();
                    tie(instance, item);
                    node.append(instance);
                });
                inner.remove();
                break;
            case Object:
                map(node, data);
                break;
            case Function:
                node.html(data());
                break;
            default:
                node.html(data.toString());
                break;
            case String:
                node.html(data);
                break;
        }
    };
    ((typeof module === "undefined") ? window : module.exports).tie=tie;
})();
