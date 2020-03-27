const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.search = {

    dificultad: function () {
        return select ('.btnfilter');
    },

    receta: function (){
        return select ('.card-desc');
    },

    ingredientes: function (){
        return select ('.divRecipe');
    }
};