DetailCtrl.$inject = ['PersonService'];
function DetailCtrl(PersonService) {
  this.contacts = PersonService;

  this.save = () => {
    this.contacts.update(this.contacts.selectedPerson);
  };

  this.remove = () => {
    this.contacts.remove(this.contacts.selectedPerson);
  };
}

export default DetailCtrl;
