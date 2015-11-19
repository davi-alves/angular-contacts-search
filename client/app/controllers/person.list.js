import _ from 'lodash';

ListCtrl.$inject = ['$scope', 'PersonService'];
function ListCtrl($scope, PersonService) {
  this.search = '';
  this.orderBy = '-fullName';
  this.contacts = PersonService;

  $scope.$watch(() => this.search, _.debounce((newVal, oldVal) => {
    if (angular.isDefined(newVal)) {
      this.contacts.doSearch(newVal);
    }
  }, 500));

  $scope.$watch(() => this.orderBy, (newVal, oldVal) => {
    if (angular.isDefined(newVal)) {
      this.contacts.doOrder(newVal);
    }
  });

  this.loadMore = () => {
    this.contacts.loadMore();
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
