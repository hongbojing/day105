angular
    .module('myApp', [])
    .controller('myController', myController);

function myController($http) {
    var vm = this;
    $http.get("http://angularfox.com/data-api/test-data-2.php")
        .success(function (response) {
            vm.courses = response.records;
        });

}