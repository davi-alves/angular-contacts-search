import _ from 'lodash';

PersonService.$inject = ['toaster', 'Person'];

function PersonService(toaster, Person) {
  var service = {
    selectedPerson: null,
    persons: [],
    hasMore: true,
    page: 1,
    isLoading: false,
    search: null,
    orderBy: null,
    isSaving: false,
    isDeleting: false,
    add(person) {
      this.persons.push(person);
    },
    selectPerson(person) {
      this.selectedPerson = person;
    },
    doSearch(search) {
      this.hasMore = true;
      this.page = 1;
      this.persons = [];
      this.search = search;
      this.load();
    },
    doOrder(orderBy) {
      this.hasMore = true;
      this.page = 1;
      this.persons = [];
      this.orderBy = orderBy;
      this.load();
    },
    load() {
      if (!this.hasMore || this.isLoading) {
        return;
      }

      this.isLoading = true;
      let params = {page: this.page, search: this.search, ordering: this.orderBy};

      Person.get(params, (response) => {
        angular.forEach(response.results, (person) => {
          if (!_.find(this.persons, {id: person.id})) {
            this.persons.push(new Person(person));
          }
        });
        this.hasMore = !!response.next;
        this.isLoading = false;
      });
    },
    loadMore () {
      if (this.hasMore && !this.isLoading) {
        this.page++;
        this.load();
      }
    },
    create: function (person) {
      this.isSaving = true;
      return Person.save(person).$promise.then((response) => {
        toaster.pop('success', `'${person.name}' was added to contacts list`);
        this.isSaving = false;
        this.persons.push(response);
        this.doSearch();
      });
    },
    update (person) {
      this.isSaving = true;
      return person.$update().then(() => {
        toaster.pop('success', `'${person.name}' was updated`);
        this.isSaving = false;
      });
    },
    remove (person) {
      this.isDeleting = true;
      return person.$remove().then(() => {
        toaster.pop('success', `'${person.name}' was removed from contacts list`);
        this.selectedPerson = null;
        this.isDeleting = false;

        let index = this.persons.indexOf(person);
        if (index !== -1) {
          this.persons.splice(index, 1);
        }
      });
    }
  };

  service.load();

  return service;
}

export default PersonService;
