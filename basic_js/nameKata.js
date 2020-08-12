function hello(name) {
  if (!name) {
    return 'Hello, World!'
  } else if (typeof name === 'string') {
     return `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`
  }
}
