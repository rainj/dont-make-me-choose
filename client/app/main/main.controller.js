'use strict';

angular.module('makeChoiceApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, socket, choices) {
    var page = 0;
    var pageSize = 1;
    $scope.displayChoices = choices.getRandomChoices(page, pageSize);

    var getRandomTimes = function() {
        return Math.floor(Math.random() * 20) + 20;
    };

    var isRunning = false;
    var times = getRandomTimes();
    var count = 0;
    var refresh = function() {
        if(count >= times) {
            isRunning = false;
            return;
        }
        var sleepTime = 1000;
        var oneThird = 5;
        var twoThird = times - 5;

        if(count < oneThird) {
            sleepTime -= Math.floor(800 / (oneThird - count));
        }
        if(count >= oneThird && count < twoThird) {
            sleepTime = 200;
        }
        if(count > twoThird) {
            sleepTime += Math.floor(800 / (times - count));
        }

        $timeout(function(){
            $scope.displayChoices = choices.getRandomChoices(page++, pageSize);
            count ++;
        }, sleepTime).then(function() {
            refresh();
        });
    }

    $scope.$on('start_btn_click', function() {
        if(isRunning){
            return;
        }
        times = getRandomTimes();
        count = 0;
        isRunning = true;
        refresh();
    });

    $scope.getDisplayChoice =  function(index) {
        return function() {
            return $scope.displayChoices[index];
        }
    }
    
    $scope.getIsRunning = function(){
        return !!isRunning;
    }

    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
