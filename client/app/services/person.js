import angular from 'angular';

import PersonFactory from './person.factory';
import PersonService from './person.service';
import Person         from './person.api';

const _module = angular
  .module('persons:services', [])
  .factory('PersonFactory', PersonFactory)
  .service('PersonService', PersonService)
  .factory('Person', Person);

export default _module.name;
