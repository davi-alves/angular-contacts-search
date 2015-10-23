ListCtrl.$inject = ['$scope', 'PersonService'];
function ListCtrl($scope, PersonService) {
  this.persons = [];
  this.selectedPerson = null;
  this.search = '';
  this.orderBy = '+fullName';

  $scope.$watch(() => PersonService.persons, (val) => this.persons = val);
  $scope.$watch(() => PersonService.selectedPerson, (val) => this.selectedPerson = val);

  this.selectPerson = PersonService.selectPerson;

  this.sensitiveSearch = (person) => {
    if (this.search) {
      return person.fullName.indexOf(this.search) === 0 ||
        person.email.indexOf(this.search) === 0;
    }

    return true;
  };

  this.changeOrder = (field) => {
    let dir = '+';
    if (this.orderBy.match(field) && this.orderBy.charAt(0) === '+') {
      dir = '-';
    }

    this.orderBy = dir + field;
  };

}

export default ListCtrl;
