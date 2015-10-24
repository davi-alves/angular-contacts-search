PersonService.$inject = ['$rootScope', 'PersonApi'];

function PersonService($rootScope, PersonApi) {
  this.selectedPerson = null;
  this.persons = [];
  this.hasMore = true;
  this.page = 1;
  this.isLoading = false;

  PersonApi.get((response) => {
    this.hasMore = response.hasMore;
    this.page++;
    this.persons = this.persons.concat(response.results);
  });

  this.add = (person) => {
    this.persons.push(person);
  };

  this.selectPerson = (person) => {
    this.selectedPerson = person;
  };
}

export default PersonService;
