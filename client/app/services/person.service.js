PersonService.$inject = ['$rootScope', 'PersonFactory'];

function PersonService($rootScope, PersonFactory) {
  this.selectedPerson = null;
  this.persons = [];

  PersonFactory.make().then((response) => {
    this.persons = response;
  });

  this.add = (person) => {
    this.persons.push(person);
  };

  this.selectPerson = (person) => {
    this.selectedPerson = person;
  };
}

export default PersonService;
