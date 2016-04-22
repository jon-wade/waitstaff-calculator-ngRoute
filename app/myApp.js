//main body goes here
angular.module('myApp', ['ngRoute'])
    /* run section below provides an error page if there is an internal error */
    .run(function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });



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
            .otherwise('/error');
    }])
    .controller('HomeCtrl', ['$scope', function($scope){
        //home page controller code in here


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
    .controller('meCtrl', function($scope){
        //my-earnings page controller code in here
    });

    //

    //
    //    $scope.reset = function(){
    //        console.log('resetting all variables');
    //        $scope.cancel();
    //        $scope.subTotal=0;
    //        $scope.tip=0;
    //        $scope.customerTotal=0;
    //        $scope.tipTotal=0;
    //        $scope.mealCount=0;
    //        $scope.averageTip=0;
    //    }
    //
    //});
