(function  () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.list = "";

    $scope.getMessage = function () {
      $scope.message = "";
      var items = $scope.list.trim();
      if (items === "") {
        $scope.message = "Please enter data first";
      }
      else {
        var size = getSizeOfList(items);
        if (size > 3) {
          $scope.message = "Too much!";
        }
        else {
          $scope.message = "Enjoy!";
        }
      }
    };

    function getSizeOfList(list) {
      var items = list.split(',');
      var size = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== "")
          size++;
      }
      return size;
    }
  }

})();
