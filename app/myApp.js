//main body goes here
angular.module('myApp', ['ngRoute', 'ngAnimate'])
    /* run section below provides an error page if there is an internal error */
    .run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });


        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.isLoading = true;});


        //store variables that need to be accessible from each controller
        $rootScope.tipTotal=0;
        $rootScope.mealCount=0;
        $rootScope.averageTip=0;

    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            /* home page routing */
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            /* new meal page routing */
            .when('/new-meal', {
                templateUrl: 'new-meal.html',
                controller: 'nmCtrl'
            })
            /* my earnings page routing */
            .when('/my-earnings', {
                templateUrl: 'my-earnings.html',
                controller: 'meCtrl'}
            )
            .when('/error', {
                templateUrl: 'error.html'
            })
            /* redirect all other routes to the home page */
            .otherwise('/');
    }])
    .controller('HomeCtrl', ['$scope', function($scope){
        //home page controller code in here
        //none required

    }])
    .controller('nmCtrl', function($scope, $rootScope){
        //new-meal page controller code in here
        $scope.baseMealPrice;
        $scope.taxRate;
        $scope.tipPercentage;
        $scope.err=false;
        $scope.subTotal=0;
        $scope.tip=0;
        $scope.customerTotal=0;

        $scope.submit = function(){
            if ($scope.form.$invalid){
                $scope.err=true;
                console.log('Houston, we have a problem...');
                console.log($scope.err);
            }
            else {
                $scope.subTotal = ($scope.baseMealPrice*(1+($scope.taxRate/100)));
                $scope.tip = ($scope.baseMealPrice*($scope.tipPercentage/100));
                $scope.customerTotal = $scope.subTotal + $scope.tip;

                $rootScope.tipTotal += $scope.tip;
                $rootScope.mealCount++;
                $rootScope.averageTip = $scope.tipTotal/$scope.mealCount;

                console.log($rootScope.tipTotal);
                console.log($rootScope.mealCount);
                console.log($rootScope.averageTip);
            }
        };

        $scope.cancel = function(){
            console.log('clearing meal amount variables');
            $scope.err=false;
            $scope.baseMealPrice=undefined;
            $scope.taxRate=undefined;
            $scope.tipPercentage=undefined;
        };
    })
    .controller('meCtrl', function($scope, $rootScope){
        //my-earnings page controller code in here
        console.log($rootScope.tipTotal);
        console.log($rootScope.mealCount);
        console.log($rootScope.averageTip);

            $scope.reset = function(){
                console.log('resetting all variables');
                $rootScope.tipTotal=0;
                $rootScope.mealCount=0;
                $rootScope.averageTip=0;
            }
    });

