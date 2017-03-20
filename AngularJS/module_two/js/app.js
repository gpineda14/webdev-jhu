(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buying = this;

    buying.itemsBuying = ShoppingListCheckOffService.getItemsBuying();

    buying.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      if (buying.itemsBuying.length === 0) {
        buying.emptyMessage = true;
      }
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.itemsBought = ShoppingListCheckOffService.getItemsBought();

    bought.emptyList = function () {
      if (bought.itemsBought.length === 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsBuying = [{name: "cookies", quantity: 10}, {name: "apples", quantity: 12}, {name: "chips", quantity: 2}, {name: "pop tarts", quantity: 6}, {name: "pencils", quantity: 9}];
    var itemsBought = [];

    service.getItemsBuying = function() {
      return itemsBuying;
    }

    service.getItemsBought = function () {
      return itemsBought;
    }
    service.buyItem = function(itemIndex) {
      itemsBought.push(itemsBuying[itemIndex]);
      itemsBuying.splice(itemIndex, 1);
    }
  }

})();
