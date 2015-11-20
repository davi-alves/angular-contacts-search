DetailCtrl.$inject = ['$scope', '$state', '$stateParams', 'PersonService'];
function DetailCtrl($scope, $state, $stateParams, PersonService) {
  $scope.contacts = PersonService;
  $scope.contacts.selectedPerson = PersonService.get($stateParams.email);

  this.save = (form) => {
    $scope.contacts.update($scope.contacts.selectedPerson)
      .then(() => {
        form.$setPristine();
        $scope.contacts.selectedPerson = null;
        $state.go('list');
      });
  };

  this.remove = () => {
    $scope.contacts.remove($scope.contacts.selectedPerson)
      .then(() => {
        $scope.contacts.selectedPerson = null;
        $state.go('list');
      });
  };
}

export default DetailCtrl;
