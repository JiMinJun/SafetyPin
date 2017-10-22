<<<<<<< HEAD
angular.module('app.controllers', ['ngCordova'])
  
=======
angular.module('app.controllers', [])

>>>>>>> 87b643ea439d708cc0e67d31d97721d69ed948d2
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {
	$scope.options = {
		autoplay: 8000,
  		loop: true,
  		speed: 500
	};
}])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('phoneCallCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('chaperoneCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('contactingAlliesCtrl', ['$scope', '$stateParams', '$state','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state,$rootScope) {
	$scope.$on('$ionicView.enter', function() {
		$rootScope.allyNeeded = true;
		$scope.timeout = setTimeout(function() {
			$state.go('allyFound');
		}, 5000);
	});

	$scope.$on('$ionicView.leave', function(){
		clearTimeout($scope.timeout);
	});
}])

.controller('noAlliesFoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
<<<<<<< HEAD
   
.controller('allyFoundCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
=======

.controller('allyFoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
>>>>>>> 87b643ea439d708cc0e67d31d97721d69ed948d2
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) {
var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
            position: latLng,
            map: $scope.map
          });
 
  }, function(error){
    console.log("Could not get location");
  });

}])

.controller('profileCtrl', ['$scope', '$state', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $rootScope) {

  $scope.save = function() {
    $rootScope.profile = $scope.profile;
    $state.go('home');
  }

  $scope.profile = {
    isOptedIn: $rootScope.profile.isOptedIn,
    radius: $rootScope.profile.radius,
    languages: $rootScope.profile.languages
  }

	$scope.radii = [
		{
			value: 1,
			view: "5 blocks"
		},
		{
			value: 2,
			view: "10 blocks"
		},
		{
			value: 3,
			view: "1 mile"
		},
		{
			value: 4,
			view: "2 miles"
		},
		{
			value: 5,
			view: "5 miles"
		},
	];

}])

.controller('chaperoneViewCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
