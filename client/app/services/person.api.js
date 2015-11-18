Person.$inject = ['$resource', 'API_URL'];

function Person($resource, API_URL) {
  return $resource(API_URL);
}

export default Person;
