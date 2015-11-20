import _ from 'lodash';

ListCtrl.$inject = ['$scope', '$modal', 'PersonService'];
function ListCtrl($scope, $modal, PersonService) {
  this.search = '';
  this.orderBy = '+name';
  $scope.contacts = PersonService;

  $scope.create = () => {
    $scope.contacts.create($scope.contacts.selectedPerson).then(() => {
      $scope.contacts.selectedPerson = null;
      $scope.createModal.hide();
    });
  };

  this.showCreateModal = () => {
    $scope.contacts.selectedPerson = {};
    $scope.createModal = $modal({
      scope: $scope,
      templateUrl: 'templates/modal.create.tpl.html',
      show: true
    });
  };

  this.loadMore = () => {
    $scope.contacts.loadMore();
  };

  // WATCHES
  $scope.$watch(() => this.search, _.debounce((newVal, oldVal) => {
    if (angular.isDefined(newVal)) {
      $scope.contacts.doSearch(newVal);
    }
  }, 500));

  $scope.$watch(() => this.orderBy, (newVal, oldVal) => {
    if (angular.isDefined(newVal)) {
      $scope.contacts.doOrder(newVal);
    }
  });
}

export default ListCtrl;
