//method chaining to create module and controller

var myApp = angular
            .module('myModule', [])
            .controller('myController', function ($scope) {
                var employees = [
                    {name: 'Ben', dob: new Date('november 23, 1990'), gender: 'male', salary: 55000.78},
                    {name: 'sara', dob: new Date('may 5, 1977'), gender: 'male', salary: 55000.78},
                    {name: 'mark', dob: new Date('august 23, 1972'), gender: 'male', salary: 55000.78},
                    {name: 'pam', dob: new Date('june 4, 1989'), gender: 'male', salary: 55000.78},
                    {name: 'todd', dob: new Date('july 6, 1945'), gender: 'male', salary: 55000.78}
                ];

                $scope.employees = employees;
                $scope.rowLimit = 3;
                $scope.orderBY = "name";
            });