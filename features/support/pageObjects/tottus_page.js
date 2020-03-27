const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.menu = {
    recetas: function () {
        return select ('#new_tottus_nav_cliente_recetas');
    }
}