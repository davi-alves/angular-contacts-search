'use strict';

import 'babel/polyfill';

import angular from 'angular';
import 'angular-resource';
import 'angular-spinner';
import 'angular-ladda';

import services from './services/person';
import controllers from './controllers/person';
import configs from './configs/person';

angular.module('persons', [
  // core/libs
  'ngResource',
  require('ngInfiniteScroll'),
  require('angular-auto-validate'),
  require('angular-strap'),
  'angularSpinner',
  'angular-ladda',
  // app specific
  services,
  controllers,
  configs
]);
