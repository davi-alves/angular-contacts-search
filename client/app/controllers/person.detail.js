DetailCtrl.$inject = ['$scope', 'PersonService'];
function DetailCtrl($scope, PersonService) {
  $scope.contacts = PersonService;

  this.save = () => {
    $scope.contacts.update($scope.contacts.selectedPerson)
      .then(() => $scope.contacts.selectedPerson = null);
  };

  this.remove = () => {
    $scope.contacts.remove($scope.contacts.selectedPerson)
      .then(() => $scope.contacts.selectedPerson = null);
  };
}

export default DetailCtrl;
