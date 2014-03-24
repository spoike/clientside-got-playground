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
                        $scope: scope
                    });
                };
            });
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('when creating the family list controller and retrieving characters from the show', function() {
            
            beforeEach(function() {
                $httpBackend.expectGET(jsonUrl);
                var controller = createController();
                $httpBackend.flush();
            });

            it('should always set familyMembers to an array', function() {
                expect(scope.familyMembers).to.exist;
            });

            it('should load characters from http service', function() {
                expect(scope.familyMembers.length).to.equal(1);
            });

        });


    });

});
