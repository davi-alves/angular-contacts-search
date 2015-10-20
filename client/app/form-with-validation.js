'use strict';

import 'babel/polyfill';

import angular from 'angular';
import 'angular-animate';
import 'angular-ladda';

angular
  .module('minMax', [
    'ngAnimate',
    require('angular-auto-validate'),
    'angular-ladda'
    ])
  .run(function (bootstrap3ElementModifier, defaultErrorMessageResolver) {
    bootstrap3ElementModifier.enableValidationStateIcons(true);

    defaultErrorMessageResolver
      .setI18nFileRootPath('bower_components/angular-auto-validate/dist/lang/');
    defaultErrorMessageResolver.setCulture('pt-BR');
    defaultErrorMessageResolver.getErrorMessages().then((errorMessages) => {
      errorMessages['tooYoung'] = 'Você precisa ter no mínimo {0} anos de idade para se registrar';
      errorMessages['badUsername'] = 'O usuário só pode conter letras, números e _';
    });
  })
  .controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$http'];
function MinMaxCtrl($http) {
  let vm = this;
  vm.formModel = {};
  vm.submitting = false;

  vm.register = () => {
    console.info('> Submitting form', vm.formModel);
    vm.submitting = true;
    $http.post('https://minmax-server.herokuapp.com/register/', this.formModel)
      .then((response) => {
        console.log(`  + Form submitted: ${response.statusText}`);
      }, (response) => {
        console.error(`  - Submit failed: ${response.statusText}`);
      })
      .finally(() => vm.submitting = false);
  };
}
