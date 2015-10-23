import angular from 'angular';

import PersonFactory from './person.factory';
import PersonService from './person.service';

const _module = angular
  .module('persons:services', [])
  .factory('PersonFactory', PersonFactory)
  .service('PersonService', PersonService);

export default _module.name;
