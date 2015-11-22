function Spinner() {
  return {
    restrict: 'E',
    scope: {
      isLoading: '='
    },
    templateUrl: 'templates/spinner.tpl.html'
  };
}

export default Spinner;
