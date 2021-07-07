var app = angular.module('myApp');

app.filter('salary', function () {
    return function (salary) {
        return salary > 35000 ? 'N/A' : salary;
    }
})