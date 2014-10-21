 'use strict';

 /**
  * @ngdoc object
  * @name testApp.testController.mainController
  * @description Main Controller
  **/
 angular.module('testApp').controller('mainController', ['$scope', 'hackerNewsAPI', function($scope, hackerNewsAPI) {
     $scope.name = 'Hacker News Top 100';
     $scope.newsIds = [];
     $scope.news = [];
     $scope.knowMoreUrl = "http://novicelab.org";

     /**
      * Get's hacker news top hundred urls
      */
     hackerNewsAPI.getTop100().then(function(data) {
         $scope.newsIds = data;
         $scope.getNewsDetails();
     }, function(err) {
         $scope.newsIds = [err];
     });

     /**
      * [Get's news item from each news Id]
      */
     $scope.getNewsDetails = function() {
         angular.forEach($scope.newsIds, function(newsId) {
             hackerNewsAPI.getNewsInfo(newsId).then(function(data) {
                 $scope.news.push(data);
             }, function(err) {
                 $scope.news.push(err);
             });
         });
     }

     /**
      * Changes the knowMore URL
      */
     $scope.knowMore = function(url) {
         $scope.knowMoreUrl = url;
         $("#know-more-modal-lg").modal('show');
     }
 }]);
