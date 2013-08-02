/*
 * Copyright 2013 Lucas A. Dohring <lucas@dohring.tk>
 * Licensed under the EUPL V.1.1
 */

(function (exports) {
    "use strict";
    var map = function (root, context) {
        for (var key in context) {
            var nodes = [root];
            if (key.length && (key[0] !== '_')) nodes = [root.find('.' + key), root.find('#' + key)];
            for (var node, i = 0, len = nodes.length; i < len; ++i) {
                node = nodes[i];

                var data = context[key];
                if (data === undefined) break;
                if (data.constructor == Function) {
                    data = data.call(this);
                }

                if (key[0] === '_') {
                    var attr = key.substr(1);
                    root.attr(attr, data.toString());
                }
                tie.call(this, node, data);
            }
        }
    };

    var tie = function (node, data) {
        switch (data.constructor) {
            case Array:
                var inner = node.children();
                tie.call(this, inner, data[0]);
                for (var i = 1, len = data.length; i < len; ++i) {
                    var instance = inner.clone();
                    tie.call(this, instance, data[i]);
                    node.append(instance);
                }
                break;
            case Object:
                map.call(this, node, data);
                break;
            case Boolean:
                if (!data) node.remove();
                break;
            default:
                node.html(data.toString());
                break;
        }
    };
    exports.tie = function (node, directives, context) {
        if (context) tie.call(context, node, context);
        else context = directives;
        tie.call(context, node, directives);
    };
})((typeof module === "undefined") ? window : module.exports);
