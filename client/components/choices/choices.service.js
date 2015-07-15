'use strict';

angular.module('makeChoiceApp')
  .service('choices', function () {

  	var _totalChoices;
  	var _loadChoices = function() {
  		if(_totalChoices) {
  			return _totalChoices;
  		}
  		_totalChoices = [];
	    for(var i = 0; i < 20; i ++) {
	        var choice = {
	            id: i
	        }
	        choice.name = '餐馆' + i;
	        choice.url = 'http://github.com/rainj'
	        choice.description = 'Special price';
	        _totalChoices.push(choice);
	    }
	    return _totalChoices;
  	}

  	return {
  		getRandomChoices: function(page, pageSize) {
  			_loadChoices();
  			var totalCount = _totalChoices.length;
  			var index = (page * pageSize) % totalCount;
  			return _totalChoices.slice(index, index + pageSize);
  		}
  	}
  });
