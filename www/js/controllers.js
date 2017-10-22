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
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.profile = {
		isOptedIn: true,
		radius: "5 blocks",
		languages: "English"
	};

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
 