angular.module("App")
var foodArray = []
  .controller('Food List', function($scope) {
    $scope.addFood = function(food) {
      $scope.foodArray.push(food);
      console.log(foodArray);
    }
  })
  .component('foodList', {

    bindings: {
      food: '<',
    },
    controller: 'Food List',
    templateURL: 'public/views/foodList-view.html'
    }
});
