function Card() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'templates/card.tpl.html'
  };
}

export default Card;
