//method chaining to create module and controller

var myApp = angular
    .module('myApp', [])
    .controller('myController', function ($scope, httpGetService, stringService) {
        var employees = [
            { name: 'Ben', dob: new Date('november 23, 1990'), gender: 'male', salary: 55000.78 },
            { name: 'sara', dob: new Date('may 5, 1977'), gender: 'female', salary: 26789.78 },
            { name: 'mark', dob: new Date('august 23, 1972'), gender: 'male', salary: 45678.78 },
            { name: 'pam', dob: new Date('june 4, 1989'), gender: 'female', salary: 65767.78 },
            { name: 'todd', dob: new Date('july 6, 1945'), gender: 'male', salary: 34565.78 }
        ];

        $scope.hideSalary = false;

        $scope.employees = employees;
        $scope.rowLimit = 5;
        $scope.orderBY = "name";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.orderBY == column) ? !$scope.reverseSort : false;
            $scope.orderBY = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.orderBY == column)
                return $scope.reverseSort ? 'arrow down' : 'arrow up';
            return '';
        }

        httpGetService.getData()
        .then(
            function(response) {
                console.log('response', response)
            },
            function(err) {
                console.log('error', err)
            }
        )

        setTimeout(()=>{
            console.log(stringService.processString('AngularVideoTutorial'))            
        }, 1000)
        
    });