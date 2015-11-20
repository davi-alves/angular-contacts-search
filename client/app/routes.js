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
  }
];

export default _routes;
