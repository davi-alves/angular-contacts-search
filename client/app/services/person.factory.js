import _ from 'lodash';
import angular from 'angular';

const randomDate = (start, end) => new Date(
  start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const captalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

PersonFactory.$inject = ['$http', '$templateCache'];

function PersonFactory($http, $templateCache) {
  const make = (amount = 30) => {
    return $http({
        method: 'GET',
        url: 'http://api.randomuser.me/?results=30',
        cache: $templateCache
      })
      .then(function(response) {
        let persons = _.pluck(response.data.results, 'user');
        let i = 0;
        persons = _.map(persons, function(person, index) {
          person.id = ++i;
          person.fullName = `${captalize(person.name.first)} ${captalize(person.name.last)}`;
          person.birthdate = randomDate(new Date(1970, 0, 1), new Date(1997, 0, 1));

          return person;
        });

        return persons;
      });
  };

  return {
    make
  };
}

export default PersonFactory;
