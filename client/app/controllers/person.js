import angular from 'angular';

import ListCtrl from './person.list';
import DetailCtrl from './person.detail';

const _module = angular
  .module('persons:controllers', [])
  .controller('ListCtrl', ListCtrl)
  .controller('DetailCtrl', DetailCtrl);

export default _module.name;
