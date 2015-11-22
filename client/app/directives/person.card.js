CardCtrl.$inject = ['$scope', 'PersonService'];

function CardCtrl ($scope, PersonService) {
  $scope.isDeleting = false;
  $scope.delete = () => {
    $scope.isDeleting = true;
    PersonService.remove($scope.user).then(() => $scope.isDeleting = false);
  };
}

function Card() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'templates/card.tpl.html',
    controller: CardCtrl
  };
}

export default Card;
