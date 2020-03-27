Feature: Challenge Falabella

   Ejercicio 3 Automation with TestCafe and Cucumber
   
   Scenario: Validar ingredientes de receta tottus
      Given Que busco en google "Tottus sucursales"
      And Selecciono "Tottus Nataniel" del listado
      And Accedo al sitio web
      And Busco y selecciono la opcion "recetas"
      When Selecciono dificultad "Alta"
      And Busco la receta "corana de Rollitos de canela"
      Then Valido que la receta contiene "canela"
      And Valido que la receta contiene "azucar rubia"