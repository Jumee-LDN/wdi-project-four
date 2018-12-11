export function handleChange(e) {
  const { target: {name, value} } = e;
  this.setState({ [name]: value }, () => {
    console.log('this is state', this.state);
  });
}

export function onlyUnique(value, index, self){
  return self.indexOf(value) === index;
}

export function getRandomInt() {
  return Math.random();
}


export function titling(word) {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.substr(1, word.length - 1);
}
