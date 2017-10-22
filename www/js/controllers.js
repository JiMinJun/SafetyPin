angular.module('app.controllers', [])

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
		$scope.timeout = setTimeout(function() {
			$rootScope.allyNeeded = true;
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

.controller('allyFoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
