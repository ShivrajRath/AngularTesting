/**
    * @ngdoc service
    * @name testApp.services
**/
var services = angular.module('services', [])

services.factory('hackerNewsAPI', ['$http', '$q', function($http, $q) {
    var factory = {};
    var _hackerNewsTop100 = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    /**
     * Top 100 hacker news 
     */
    factory.getTop100 = function() {
        var defered = $q.defer();

        $http.get(_hackerNewsTop100).
        success(function(data) {
            defered.resolve(data);
        }).
        error(function() {
            defered.reject('There was an error');
        });

        return defered.promise;
    }

    /**
     * Get's news item from news id
     */
    factory.getNewsInfo = function(id) {
        var defered = $q.defer();

        $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty').
        success(function(data) {
            defered.resolve(data);
        }).
        error(function() {
            defered.reject('There was an error');
        });

        return defered.promise;
    }

    return factory;

}]);
