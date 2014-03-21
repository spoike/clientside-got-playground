define(['angular', 'angular-mocks', 'got/app'], function(angular, mocks) {

    describe('GameOfThrones app', function(){
        var scope, createController, $httpBackend, jsonUrl = '/data/characters.json';

        beforeEach(function() {
            mocks.module('GameOfThrones');
            mocks.inject(function($rootScope, $controller, $injector) {
                $httpBackend = $injector.get('$httpBackend');
                $httpBackend.when('GET', jsonUrl).respond([{name: 'Paige Turner', house: 'Turner'}]);
                scope = $rootScope.$new();
                createController = function() {
                    return $controller('FamilyListController', {
                        $scope: scope,
                    });
                }
            });
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should fetch authentication token', function() {
            $httpBackend.expectGET(jsonUrl);
            var controller = createController();
            $httpBackend.flush();
            expect(scope.familyMembers).to.exist;
            expect(scope.familyMembers.length).to.equal(1);
        });

        it('should load characters from http service', function() {

        });
    });

});
