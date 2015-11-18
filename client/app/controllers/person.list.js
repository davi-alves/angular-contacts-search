ListCtrl.$inject = ['PersonService'];
function ListCtrl(PersonService) {
  this.search = '';
  this.orderBy = '+fullName';
  this.contacts = PersonService;

  this.loadMore = () => {
    this.contacts.loadMore();
  };

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
