var myApp = angular.module('myApp',[]);

myApp.controller('PersListCtrl', ['$scope', function($scope) {
   $scope.persons = [
     {
  		"username" : "etrip",
  		"name": "Enrico Tripaldi",
  		"sex" : "M",
  		"age" : 27,
  		"height" : 1.70,
  		"weight": 70,
  		"disease" :  [{"code": "E06.3", "description": "Chronic thyroiditis (Hashimoto)"}, {"code": "E14", "description": "Diabetes mellitus"}]
  	},
  	{
  		"username" : "equa",
  		"name": "Erica Quaranta",
  		"sex" : "F",
  		"age" : 54,
  		"height" : 75,
  		"weight" : 1.68,
  		"disease" :  [{"code": "I15", "description": "Secondary hypertension"}]
  	},
  	{
  		"username" : "pvalt",
  		"name": "Pietro Valtieri",
  		"sex" : "M",
  		"age" : 71,
  		"height" : 82,
  		"weight" : 1.83,
  		"disease" : [{"code": "E14", "description": "Diabetes mellitus"}]
  	},
  	{
  		"username" : "mrossi",
  		"name": "Margherita Rossi",
  		"sex" : "F",
  		"age" : 44,
  		"height" : 1.70,
  		"weight" : 56,
  		"disease" :  [{"code": "E06.3", "description": "Chronic thyroiditis (Hashimoto)"}, {"code": "E66", "description": "Obesity"}]
  	}
  ];

    $scope.add = function() {
        $scope.persons.push($scope.person);
        $scope.person = "";
    }
}]);


//var app = angular.module('angelEatsApp', []);


//recepies
/*function RecepiesListCtrl($scope) {
  $scope.recepies = [
    {"file": "lasagna.jpg", "description": "Lasagna.",
     "tags": "lasagna"},
    {"file": "chicken.jpg", "description": "Chicken.",
     "tags": "chicken"},
    {"file": "duck.jpg", "description": "Duck.",
     "tags": "duck"},
    {"file": "eggrolls.jpg", "description": "Eggrolls.",
     "tags": "eggrolls"},
    {"file": "meatloaf.jpg", "description": "Meatloaf.",
     "tags": "meatloaf"},
    {"file": "pancakes.jpg", "description": "Pancakes.",
     "tags": "pancakes"},
    {"file": "tiramisu.jpg", "description": "Tiramisu.",
     "tags": "tiramisu"},
    {"file": "millefoglie.jpg", "description": "Millefoglie.",
     "tags": "millefoglie"}
  ];
}
app.controller("EatsCtrl", ["$scope", "$firebase",
    function($scope, $firebase) {
      var sync = $firebase(ref);

      var list = sync.$asArray();
      list.$loaded().then(function() {
        console.log("list has " + list.length + " item(s)");
      });

      // we can add it directly to $scope if we want to access this from the DOM
      $scope.list = list;
    }
  ]);

//persons
function PersListCtrl($scope) {
  $scope.persons = [
     {
  		"username" : "etrip",
  		"name": "Enrico Tripaldi",
  		"sex" : "M",
  		"age" : 27,
  		"height" : 1.70,
  		"weight": 70,
  		"disease" :  [{"code": "E06.3", "description": "Chronic thyroiditis (Hashimoto)"}, {"code": "E14", "description": "Diabetes mellitus"}]
  	},
  	{
  		"username" : "equa",
  		"name": "Erica Quaranta",
  		"sex" : "F",
  		"age" : 54,
  		"height" : 75,
  		"weight" : 1.68,
  		"disease" :  [{"code": "I15", "description": "Secondary hypertension"}]
  	},
  	{
  		"username" : "pvalt",
  		"name": "Pietro Valtieri",
  		"sex" : "M",
  		"age" : 71,
  		"height" : 82,
  		"weight" : 1.83,
  		"disease" : [{"code": "E14", "description": "Diabetes mellitus"}]
  	},
  	{
  		"username" : "mrossi",
  		"name": "Margherita Rossi",
  		"sex" : "F",
  		"age" : 44,
  		"height" : 1.70,
  		"weight" : 56,
  		"disease" :  [{"code": "E06.3", "description": "Chronic thyroiditis (Hashimoto)"}, {"code": "E66", "description": "Obesity"}]
  	}
  ];
}

 //food waste
function WastePhotoCtrl($scope) {
  $scope.photos = [
    {"file": "foodwaste1.jpg", "description": "Food waste 1.",
     "tags": "food waste"},
    {"file": "foodwaste2.jpg", "description": "Food waste 2.",
     "tags": "food waste vegetables"},
    {"file": "foodwaste3.jpg", "description": "Food waste 3.",
     "tags": "food waste poor"},
    {"file": "foodwaste4.jpg", "description": "Food waste 4.",
     "tags": "food waste poor"},
    {"file": "foodwaste5.jpg", "description": "Food waste 5.",
     "tags": "food waste"},
    {"file": "foodwaste6.jpg", "description": "Food waste 6.",
     "tags": "food waste homeless"},
    {"file": "foodwaste7.jpg", "description": "Food waste 7.",
     "tags": "food waste homeless"},
    {"file": "foodwaste8.jpg", "description": "Food waste 8.",
     "tags": "food waste animals"},
    {"file": "foodwaste9.jpg", "description": "Food waste 9.",
     "tags": "food waste animals"}
  ];
}*/

/*
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
*/