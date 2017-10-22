angular.module('app.controllers', ['ngCordova'])
  
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
   
.controller('phoneCallCtrl', ['$scope', '$stateParams', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope) {
	$rootScope.requestType = 'phoneCall';
}])
   
.controller('chaperoneCtrl', ['$scope', '$stateParams', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope) {
	$rootScope.requestType = 'chaperone';
}])
   
.controller('contactingAlliesCtrl', ['$scope', '$stateParams', '$state','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state,$rootScope) {
	$scope.$on('$ionicView.enter', function() {
		$rootScope.allyNeeded = true;
		$scope.timeout = setTimeout(function() {
			$state.go('allyFound')
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
   
.controller('allyFoundCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

	$scope.radii = ["5 blocks",
		"10 blocks",
		"1 mile",
		"2 miles",
		"5 miles",
	];

}])

.controller('chaperoneViewCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.showButtons = true;
	
	$scope.helpSeeker = function() {
		$scope.showButtons = false;
	}
}])

.controller('allyUnavailabeCtrl', ['$scope', '$stateParams',
function($scope, $stateParams) {
	
}])
 