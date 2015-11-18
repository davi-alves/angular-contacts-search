DetailCtrl.$inject = ['PersonService'];
function DetailCtrl(PersonService) {
  this.contacts = PersonService;
}

export default DetailCtrl;
