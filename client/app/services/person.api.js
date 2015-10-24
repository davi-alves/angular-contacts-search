PersonApi.$inject = ['$resource', 'API_URL'];

function PersonApi($resource, API_URL) {
  return $resource(API_URL);
}

export default PersonApi;
