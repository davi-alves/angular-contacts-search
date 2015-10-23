import angular from 'angular';

import token from './person.api-token';

const _module = angular.module('persons:config', [])
  .constant('API_TOKEN', token);

export default _module.name;
