define(['angular'], function(angular) {
    
    var app = angular.module('GameOfThrones', []);

    app.controller('FamilyListController', ['$scope', '$http', function($scope, $http) {
        $scope.familyMembers = [];

        $http({method: 'GET', url: '/data/characters.json'}).
            success(function(data, status, headers, config) {
                var members = angular.fromJson(data);
                $scope.familyMembers = members;
            });
    }]);

    return app;

});