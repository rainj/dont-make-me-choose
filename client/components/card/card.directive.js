'use strict';

angular.module('makeChoiceApp')
  .directive('card', function () {
    return {
      templateUrl: 'components/card/card.html',
      restrict: 'EA',
      scope: {
      	getChoice: '&'
      },
      link: function (scope, element, attrs) {
      	console.log(scope.getChoice);
      	scope.choice = scope.getChoice();
      }
    };
  });