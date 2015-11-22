function Spinner() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      isLoading: '='
    },
    templateUrl: 'templates/spinner.tpl.html'
  };
}

export default Spinner;
