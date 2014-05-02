'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', []);


memoryGameApp.factory('game', function() {
  var tileNames = ['Bee', 'Crab', 'Mouse', 'Owl', 'Wolf', 'Turtle',
    'Moose', 'Panda'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});
