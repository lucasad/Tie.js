var map = function(root, context) {
    for(key in context) {
        var node = root.find('.'+key);
        var data = context[key];
        tie(node, data)
    }
}


var tie = function(node, data) {
    switch(data.constructor) {
    case Array:
        var inner = node.children();
        node.empty();
        data.forEach(function(item) {
            instance = inner.clone();
            glue(instance, item)
            node.append(instance)
        });
        break;
    case Object:
        map(node, data)
        break;
    case Function:
        data = data()
    default:
        data = data.toString()
    case String:
        node.html(data)
        break;
    }
}

module.exports = tie
