import angular from 'angular';

import Spinner from './person.spinner';
import Card from './person.card';

const _module = angular
  .module('persons:directives', [])
  .directive('spinner', Spinner)
  .directive('card', Card);

export default _module.name;
