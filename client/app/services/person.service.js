import _ from 'lodash';

PersonService.$inject = ['$rootScope', 'toaster', 'Person'];

function PersonService($rootScope, toaster, Person) {
  var service = {
    selectedPerson: null,
    persons: [],
    hasMore: true,
    page: 1,
    isLoading: false,
    search: null,
    orderBy: '+name',
    isSaving: false,
    isDeleting: false,
    get(email) {
      return _.find(this.persons, {
        email: email
      });
    },
    selectPerson(person) {
      this.selectedPerson = person;
    },
    doSearch() {
      this.hasMore = true;
      this.page = 1;
      this.persons = [];
      this.load();
    },
    doOrder() {
      this.hasMore = true;
      this.page = 1;
      this.persons = [];
      this.load();
    },
    load() {
      if (!this.hasMore || this.isLoading) {
        return;
      }

      this.isLoading = true;
      let params = {
        page: this.page,
        search: this.search,
        ordering: this.orderBy
      };

      Person.get(params, (response) => {
        if (response) {
          _.each(response.results, (person) => {
            this.persons.push(new Person(person));
          });
          this.hasMore = !!response.next;
        }
        this.isLoading = false;
      });
    },
    loadMore() {
      if (this.hasMore && !this.isLoading) {
        this.page++;
        this.load();
      }
    },
    create: function(person) {
      this.isSaving = true;
      return Person.save(person).$promise.then((response) => {
        toaster.pop('success', `'${person.name}' was added to contacts list`);
        this.isSaving = false;
        this.persons.push(response);
        this.doSearch();
      });
    },
    update(person) {
      this.isSaving = true;
      return person.$update().then(() => {
        toaster.pop('success', `'${person.name}' was updated`);
        this.isSaving = false;
      });
    },
    remove(person) {
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
    },
    watch() {
      // search
      $rootScope.$watch(() => this.search, _.debounce((newVal) => {
        if (angular.isDefined(newVal)) {
          this.doSearch();
        }
      }, 500));
      // order
      $rootScope.$watch(() => this.orderBy, (newVal) => {
        if (angular.isDefined(newVal)) {
          this.doOrder();
        }
      });
    }
  };

  service.watch();
  service.load();

  return service;
}

export default PersonService;
