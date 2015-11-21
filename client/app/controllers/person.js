import angular from 'angular';

import ListCtrl from './person.list';
import DetailCtrl from './person.detail';
import CreateCtrl from './person.create';

const _module = angular
  .module('persons:controllers', [])
  .controller('ListCtrl', ListCtrl)
  .controller('DetailCtrl', DetailCtrl)
  .controller('CreateCtrl', CreateCtrl);

export default _module.name;
