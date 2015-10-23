DetailCtrl.$inject = ['$scope', 'PersonService'];
function DetailCtrl($scope, PersonService) {
  this.selectedPerson = null;
  $scope.$watch(() => PersonService.selectedPerson, (val) => this.selectedPerson = val);
}

export default DetailCtrl;
