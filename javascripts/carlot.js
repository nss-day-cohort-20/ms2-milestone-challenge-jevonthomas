// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var carLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null, {
    loadInventory: function (callback) {
      var load = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
      });
    }
  });

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(carLot || {});