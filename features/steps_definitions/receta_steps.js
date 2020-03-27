const { Given, When, Then } = require('cucumber');
const Selector = require('testcafe').Selector;
const google = require('../support/pageObjects/google_page');
const tottus = require('../support/pageObjects/tottus_page');
const recetas = require('../support/pageObjects/receta_page');

Given ('Que busco en google {string}', function(text) {
    await 
        testController.navigateTo(google.search.url());
        testController.typeText(google.search.query(), text);
        testController.pressKey('enter');
});

Given ('Selecciono {string} del listado', async function(text) {
    await testController.click(google.search.webSucursal().withText(text));
    
});

Given ('Accedo al {string}', async function(text){
    await testController.click(google.search.webButton().withText(text));
});

Given ('Busco y selecciono la opcion {string}', async function(text){
    if (text == 'recetas y mas'){
        await testController.click(tottus.menu.recetas());
    }
});

When ('Selecciono dificultad {string}', async function(text){
    var dif = recetas.search.dificultad().withText(text);

    if (await dif.exists){
        await testController.click(dif);

    } else {
        dif = recetas.search.dificultad().withText(text.toUpperCase());
        await testController.click(dif);
    }
});

When('Busco la receta {string}', async function(text){
    var rec = recetas.search.receta().withText(text);
    
    if (await rec.exists){
        await testController.click(rec);
    } else {
        rec = recetas.search.receta().withText(text.toUpperCase());
        await testController.click(rec);
    }
});

Then('Valido que la receta contiene {string}', async function(text){
    await testController.expect(recetas.search.ingredientes().innerText).contains(text);
});

Then('Valido que la receta contiene {string}', async function(text){
    await testController.expect(recetas.search.ingredientes().innerText).contains(text);
});