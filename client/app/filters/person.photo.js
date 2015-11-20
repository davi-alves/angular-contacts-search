function Photo() {
  return (input, param) => {
    if (!input) {
      return '/assets/avatar.png';
    }

    return input;
  };
}

export default Photo;
