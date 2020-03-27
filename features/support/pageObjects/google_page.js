const {Selector} = require('testcafe');

function select(s) {
    return Selector(s).with({boundTestRun: testController})    
}

exports.search = {
    url: function () {
        return 'https://www.google.com'
    },
    query: function() {
        return select('.gLFyf');
    },
    searchButton: function() {
        return select('.gNO89b');
    },

    webSucursal: function() {
        return select('.nVcaUb >a');
    },

    webButton: function () {
        return select ('.ab_button');
    },
}