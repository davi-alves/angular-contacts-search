CreateCtrl.$inject = ['$scope', '$state', 'PersonService'];

function CreateCtrl($scope, $state, PersonService) {
  $scope.contacts = PersonService;
  $scope.contacts.selectedPerson = {};

  this.save = (form) => {
    $scope.contacts.create($scope.contacts.selectedPerson).then(() => {
      form.$setPristine();
      $scope.contacts.selectedPerson = null;
      $state.go('list');
    });
  };
}

export default CreateCtrl;
