'use strict';

import 'babel/polyfill';

import _ from 'lodash';
import angular from 'angular';
import 'angular-resource';

import services from './services/person';
import controllers from './controllers/person';
import configs from './configs/person';

angular.module('persons', [
  // core/libs
  'ngResource',
  // app specific
  services,
  controllers,
  configs
]);
