const _routes = [
  {
    name: 'list',
    options: {
      url: '/',
      templateUrl: 'templates/list.html',
      controllerAs: 'list',
      controller: 'ListCtrl'
    }
  },
  {
    name: 'edit',
    options: {
      url: '/edit/:email',
      templateUrl: 'templates/edit.html',
      controllerAs: 'detail',
      controller: 'DetailCtrl'
    }
  },
  {
    name: 'create',
    options: {
      url: '/create',
      templateUrl: 'templates/edit.html',
      controllerAs: 'detail',
      controller: 'CreateCtrl'
    }
  }
];

export default _routes;
