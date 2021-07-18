var app = angular.module('myApp');

app.service('httpGetService', httpGetService)
app.inject = ['$http', '$q'];
function httpGetService($http) {
    return {
        getData: function () {
            return new Promise((resolve, reject)=>{
                $http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {                    
                    resolve(response)
                }, function (err) {
                    reject(err)
                });
            });
        }
    }
}