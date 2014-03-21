define(['angular'], function(angular) {
    
    console.log('Dude!');

    var gotModule = angular.module('GameOfThrones', []);

    gotModule.controller('FamilyListController', ['$scope', function($scope) {

        $scope.familyMembers = [
            {
                name: "Cersei Lannister"
            },
            {
                name: "Jamie Lannister"
            }
        ];

    }]);

    return gotModule;

});