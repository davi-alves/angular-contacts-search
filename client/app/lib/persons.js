import _ from 'lodash';

let randomDate = (start, end) => new Date(
  start.getTime() + Math.random() * (end.getTime() - start.getTime()));
let captalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function getPersons ($http, $templateCache) {
  return $http({
        method: 'GET',
        url: 'http://api.randomuser.me/?results=30',
        cache: $templateCache
      })
      .then(function (response) {
        let persons = _.pluck(response.data.results, 'user');
        persons = _.map(persons, function (person) {
          person.fullName = `${captalize(person.name.first)} ${captalize(person.name.last)}`;
          person.birthdate = randomDate(new Date(1970, 0, 1), new Date(1997, 0, 1));

          return person;
        });

        return persons;
      });
}

export { getPersons };
