'use strict';

import 'babel/polyfill';

import _ from 'lodash';
import angular from 'angular';

import services from './services/person';
import controllers from './controllers/person';

angular.module('persons', [services, controllers]);
