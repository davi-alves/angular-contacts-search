'use strict';

import 'babel/polyfill';

import angular from 'angular';
import 'angular-resource';
import 'angular-spinner';

import services from './services/person';
import controllers from './controllers/person';
import configs from './configs/person';

angular.module('persons', [
  // core/libs
  'ngResource',
  require('ngInfiniteScroll'),
  'angularSpinner',
  // app specific
  services,
  controllers,
  configs
]);
