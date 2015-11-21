const _routes = [
  {
    name: 'list',
    options: {
      url: '/',
      views: {
        main: {
          templateUrl: 'templates/list.html',
          controllerAs: 'list',
          controller: 'ListCtrl',
        },
        search: {
          templateUrl: 'templates/search-form.html',
          controllerAs: 'list',
          controller: 'ListCtrl',
        }
      }
    }
  },
  {
    name: 'edit',
    options: {
      url: '/edit/:email',
      views: {
        main: {
          templateUrl: 'templates/edit.html',
          controllerAs: 'detail',
          controller: 'DetailCtrl'
        }
      }
    }
  },
  {
    name: 'create',
    options: {
      url: '/create',
      views: {
        main: {
          templateUrl: 'templates/edit.html',
          controllerAs: 'detail',
          controller: 'CreateCtrl'
        }
      }
    }
  }
];

export default _routes;
