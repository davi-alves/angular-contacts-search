import angular from 'angular';

import Spinner from './person.spinner';

const _module = angular
  .module('persons:directives', [])
  .directive('spinner', Spinner);

export default _module.name;
