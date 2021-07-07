//method chaining to create module and controller

var myApp = angular
            .module('myModule', [])
            .controller('myController', function ($scope) {
                var country = {
                    'name': "India",
                    "flag": "images/indian flag.png",
                }
                $scope.country = country;
            });

//creating variable for container

// var myController = function ($scope) {
//     $scope.message = 'Angular JS Tutorial';
// }

//mapping module and controller without creating variable for controller

// myApp.controller('myController', function ($scope) {
//     var employee = {
//         'firstName': "David",
//         "lastName": "Das",
//         "gender": "Male"
//     }
//     $scope.message = 'Angular JS Tutorial';
//     $scope.employee = employee;
// });