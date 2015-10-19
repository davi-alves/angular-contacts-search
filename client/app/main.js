'use strict';

import 'babel/polyfill';
import angular from 'angular';

angular
  .module('minMax', [])
  .controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$http'];

function MinMaxCtrl($http) {
  this.formModel = {};

  this.register = () => {
    console.info('> Submitting form', this.formModel);
    // $http.post('https://minmax-server.herokuapp.com/register/', this.formModel)
    //   .then((response) => {
    //     console.log(`  + Form submitted: ${response.statusText}`);
    //   }, (response) => {
    //     console.error(`  - Submit failed: ${response.statusText}`);
    //   });
  };
}
