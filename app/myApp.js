//main body goes here
angular.module('myApp', ['ngRoute'])
    /* run section below provides an error page if there is an internal error */
    .run(function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
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
    .controller('nmCtrl', function($scope){
        //new-meal page controller code in here
    })
    .controller('meCtrl', function($scope){
        //my-earnings page controller code in here
    });
    //.controller('myCtrl', function($scope){
    //    $scope.baseMealPrice;
    //    $scope.taxRate;
    //    $scope.tipPercentage;
    //    $scope.err=false;
    //    $scope.subTotal=0;
    //    $scope.tip=0;
    //    $scope.customerTotal=0;
    //    $scope.tipTotal=0;
    //    $scope.mealCount=0;
    //    $scope.averageTip=0;
    //
    //
    //    $scope.submit = function(){
    //        if ($scope.mealInput.$invalid){
    //            $scope.err=true;
    //        }
    //        else {
    //
    //            $scope.subTotal = ($scope.baseMealPrice*(1+($scope.taxRate/100)));
    //            $scope.tip = ($scope.baseMealPrice*($scope.tipPercentage/100));
    //            $scope.customerTotal = $scope.subTotal + $scope.tip;
    //
    //            $scope.tipTotal += $scope.tip;
    //            $scope.mealCount++;
    //            $scope.averageTip = $scope.tipTotal/$scope.mealCount;
    //        }
    //
    //        console.log($scope.mealInput);
    //        console.log($scope.mealInput.baseMealPrice.$error);
    //        console.log($scope.mealInput.taxRate.$error);
    //        console.log($scope.mealInput.tipPercentage.$error);
    //    };
    //
    //    $scope.cancel = function(){
    //        console.log('clearing meal amount variables');
    //        $scope.err=false;
    //        $scope.baseMealPrice=undefined;
    //        $scope.taxRate=undefined;
    //        $scope.tipPercentage=undefined;
    //    };
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
