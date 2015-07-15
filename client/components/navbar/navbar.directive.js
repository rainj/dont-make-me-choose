'use strict';

angular.module('makeChoiceApp')
  .directive('navbar', function ($timeout) {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'EA',
      scope:{
      	isRunning: '&'
      },
      link: function(scope, element, attrs) {
      	angular.element('.button-collapse').sideNav();
      	scope.menuClick = function() {
      		angular.element('.button-collapse').sideNav();
	    }
	    var closeSideNav = function() {
	    	angular.element('.button-collapse').sideNav('hide');
	    }
	    scope.clickStartBtn = function() {
	    	closeSideNav();
	    	scope.$emit('start_btn_click');
	    }
      	
      }
    };
  });