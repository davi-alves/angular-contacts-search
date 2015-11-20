import angular from 'angular';

import Photo from './person.photo';

const _module = angular
  .module('persons:filters', [])
  .filter('photo', Photo);

export default _module.name;
