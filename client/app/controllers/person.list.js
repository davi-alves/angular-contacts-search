import _ from 'lodash';

ListCtrl.$inject = ['$scope', '$modal', 'PersonService'];

function ListCtrl($scope, $modal, PersonService) {
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
}

export default ListCtrl;
