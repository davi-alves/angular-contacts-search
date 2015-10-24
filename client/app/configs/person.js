import angular from 'angular';

import {TOKEN, API_URL} from './person.api';

const _module = angular.module('persons:config', [])
  .config(['$httpProvider', '$resourceProvider', ($httpProvider, $resourceProvider) => {
    $httpProvider.defaults.headers.common['Authorization'] = `Token ${TOKEN}`;
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .constant('API_TOKEN', TOKEN)
  .constant('API_URL', API_URL);

export default _module.name;
