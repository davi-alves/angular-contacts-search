'use strict';

import 'babel/polyfill';

import angular from 'angular';
import 'angular-resource';
import 'angular-animate';
import 'angular-spinner';
import 'angular-ladda';
import 'angularjs-toaster';

import services from './services/person';
import controllers from './controllers/person';
import configs from './configs/person';

angular.module('persons', [
  // core/libs
  'ngResource',
  'ngAnimate',
  require('ngInfiniteScroll'),
  require('angular-auto-validate'),
  require('angular-strap'),
  'angularSpinner',
  'angular-ladda',
  'toaster',
  // app specific
  services,
  controllers,
  configs
]);
