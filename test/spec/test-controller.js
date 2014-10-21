'use strict';

describe('Main Controller Test Cases', function() {

    beforeEach(module('testApp'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('mainController', {
            $scope: scope
        });
    }));

    describe('#indexOf()1', function() {
        it('should return -1 when the value is not present1', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    });

    describe('name', function() {
        it('should return name main controller', function() {
            expect(scope.name).to.equal('Hacker News Top 100');
        })
    });

    describe('set knowmoreurl', function() {
        it('should set the knowmoreurl', function() {
            scope.knowMore('http://example.com');
            expect(scope.knowMoreUrl).to.equal('http://example.com');
        })
    });

});
