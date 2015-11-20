import _ from 'lodash';

ListCtrl.$inject = ['$scope', '$modal', 'PersonService'];
function ListCtrl($scope, $modal, PersonService) {
  this.search = null;
  this.orderBy = null;
  $scope.contacts = PersonService;

  $scope.create = (form) => {
    $scope.contacts.create($scope.contacts.selectedPerson).then(() => {
      form.$setPristine();
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
    if (angular.isDefined(newVal) && newVal !== null) {
      $scope.contacts.doSearch(newVal);
    }
  }, 500));

  $scope.$watch(() => this.orderBy, (newVal, oldVal) => {
    if (angular.isDefined(newVal) && newVal !== null) {
      $scope.contacts.doOrder(newVal);
    }
  });
}

export default ListCtrl;
