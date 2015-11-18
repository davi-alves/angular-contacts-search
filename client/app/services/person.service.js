PersonService.$inject = ['$rootScope', 'Person'];

function PersonService($rootScope, Person) {
  var service = {
    selectedPerson: null,
    persons: [],
    hasMore: true,
    page: 1,
    isLoading: false,
    add(person) {
      this.persons.push(person);
    },
    selectPerson(person) {
      this.selectedPerson = person;
    },
    load() {
      if (!this.hasMore || this.isLoading) {
        return;
      }

      this.isLoading = true;
      let params = {page: this.page};

      Person.get(params, (response) => {
        angular.forEach(response.results, (person) => {
          this.persons.push(new Person(person));
        });
        this.hasMore = !!response.next;
        this.isLoading = false;
      });
    },
    loadMore () {
      if (!this.hasMore || this.isLoading) {
        return;
      }

      this.page++;
      this.load();
    }
  };

  service.load();

  return service;
}

export default PersonService;
