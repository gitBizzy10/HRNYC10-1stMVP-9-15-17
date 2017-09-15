angular.module("App")
.controller('Good Food', function($scope){

    this.addFood = function() {
      this.onAddFood( { food : this.food } )

  }
})
.component('food' {
  bindings: {
    food: '<',
    onAddFood: '&'
  },
  controller: 'Good Food',
  templateURL: 'public/views/food-view.js'
});
