function chessboard(size) {
  var i = 0,
    _size = size * size,
    output = ' ';
  for (; i < _size; i++) {
    if (i % size === 0)
      output = output + '\n';
    output = output + (i % 2 ? '#' : ' ');
  }

  return output + '\n'
}


//let and const, local; var global//