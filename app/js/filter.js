 /**
  * @ngdoc object
  * @name testApp.filters
  * @description Filtes for test app
  **/
var filters = angular.module('filters', []);

/**
 * Makes a url trust
 */
filters.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
