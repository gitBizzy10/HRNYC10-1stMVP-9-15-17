angular.module("App")
var foodArray = []
  .controller('Food List', function($scope) {
    $scope.addFood = function(food) {
      $scope.foodArray.push(food);
      console.log(foodArray);
    }
  })
