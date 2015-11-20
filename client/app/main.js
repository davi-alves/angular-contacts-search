'use strict';

import 'babel/polyfill';
import _ from 'lodash';

import angular from 'angular';
import 'angular-resource';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-spinner';
import 'angular-ladda';
import 'angularjs-toaster';

import services from './services/person';
import controllers from './controllers/person';
import configs from './configs/person';
import filters from './filters/person';
import routes from './routes';

angular.module('persons', [
  // core/libs
  'ngResource',
  'ngAnimate',
  'ui.router',
  require('ngInfiniteScroll'),
  require('angular-auto-validate'),
  require('angular-strap'),
  'angularSpinner',
  'angular-ladda',
  'toaster',
  // app specific
  services,
  controllers,
  configs,
  filters
])

// routes
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  _.each(routes, (route) => $stateProvider.state(route.name, route.options));

  $urlRouterProvider.otherwise('/');
}]);
