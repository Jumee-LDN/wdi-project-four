export function handleChange(e) {
  const { target: {name, value} } = e;
  this.setState({ [name]: value });
}


export function onlyUnique(value, index, self){
  return self.indexOf(value) === index;
}
