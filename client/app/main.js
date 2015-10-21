'use strict';

import 'babel/polyfill';

import _ from 'lodash';
import angular from 'angular';
import 'angular-animate';
import 'angular-ladda';

angular
  .module('persons-app', [
    'ngAnimate',
    'angular-ladda'
    ])
  .controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ['$http', '$templateCache'];
function ListCtrl($http, $templateCache) {
  let vm = this;
  vm.persons = [];
  vm.selectedIndex = null;
  vm.selectedPerson = null;
  vm.search = '';
  vm.orderBy = '-fullName';

  getPersons();

  vm.selectPerson = (person, index) => {
    vm.selectedIndex = index;
    vm.selectedPerson = person;
  };

  vm.sensitiveSearch = (person) => {
    if (vm.search) {
      return person.fullName.indexOf(vm.search) === 0 ||
        person.email.indexOf(vm.search) === 0;
    }

    return true;
  };

  vm.changeOrder = (field) => {
    let dir = '-';
    if (vm.orderBy.match(field) && vm.orderBy.charAt(0) === '-') {
      dir = '+';
    }

    vm.orderBy = dir + field;
  };

  /*
    HELPERS
   */
  let randomDate = (start, end) => new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let captalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  function getPersons () {
    $http({method: 'GET', url: 'http://api.randomuser.me/?results=30', cache: $templateCache})
      .then(function (response) {

        let persons = _.pluck(response.data.results, 'user');
        vm.persons = _.map(persons, function (person) {
          person.fullName = `${captalize(person.name.first)} ${captalize(person.name.last)}`;
          person.birthdate = randomDate(new Date(1970, 0, 1), new Date(1997, 0, 1));

          return person;
        });
      }, function (response) {
        console.error(response.statusText);
      });
  }
}
