'use strict';

import 'babel/polyfill';

import _ from 'lodash';
import angular from 'angular';
import { getPersons } from './lib/persons';

angular
  .module('persons-app', [])
  .controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ['$http', '$templateCache'];
function ListCtrl($http, $templateCache) {
  let vm = this;
  vm.persons = [];
  vm.selectedPerson = null;
  vm.search = '';
  vm.orderBy = '+fullName';

  vm.selectPerson = (person) => {
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

  getPersons($http, $templateCache).then((response) => vm.persons = response);
}
