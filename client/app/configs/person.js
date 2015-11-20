import angular from 'angular';

import {TOKEN, API_URL} from './person.api';

const _module = angular.module('persons:config', [])
  // http authorization and course api config
  .config(['$httpProvider', '$resourceProvider', ($httpProvider, $resourceProvider) => {
    $httpProvider.defaults.headers.common['Authorization'] = `Token ${TOKEN}`;
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])

  // ladda default options
  .config(['laddaProvider', (laddaProvider) => {
    laddaProvider.setOption({
      style: 'expand-right'
    });
  }])

  // datepicker config
  .config(['$datepickerProvider', ($datepickerProvider) => {
    angular.extend($datepickerProvider.defaults, {
      dateFormat: 'd/M/yyyy',
      autoclose: true
    });
  }])

  .config(function($httpProvider) {
    $httpProvider.interceptors.push(function($q) {
      var realEncodeURIComponent = window.encodeURIComponent;
      return {
        request (config) {
          window.encodeURIComponent = function(input) {
            return realEncodeURIComponent(input).split('%2B').join('+');
          };
          return config || $q.when(config);
        },
        response (config) {
          window.encodeURIComponent = realEncodeURIComponent;
          return config || $q.when(config);
        }
      };
    });
  })

  // autovalidate configurations
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

  // constants
  .constant('API_TOKEN', TOKEN)
  .constant('API_URL', API_URL);

export default _module.name;
