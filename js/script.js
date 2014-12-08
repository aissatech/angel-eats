angular.module('radioDemo', ['ngMaterial'])
  .controller('SexCtrl', function($scope) {
    $scope.data = {
      group : 'Female'
    };
});

angular.module('sliderDemo', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  $scope.rating = 3;
});

angular.module('physicalMeasures', ['ngMaterial'])
.controller('MeasCtrl', function($scope) {
  $scope.data == {
      sport : ['Basket', 'Football', 'Volley'];
  };
});