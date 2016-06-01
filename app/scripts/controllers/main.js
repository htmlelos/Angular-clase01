'use strict';

/**
 * @ngdoc function
 * @name cursoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoApp
 */
//angular.module('cursoApp')
//  .controller('MainCtrl', function () {
//    this.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

angular.module('cursoApp')
  .controller('MainCtrl', function ($scope) {
    console.log('testing');
    $scope.nombre = '';
    $scope.personas = [];

    $scope.agregar = function  (persona) {
      $scope.personas.push(persona);
      $scope.nombre = '';
      console.log(persona);
    };
  });
