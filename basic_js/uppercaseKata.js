function capitals(word) {
	var indexArray =[];
	for(var i = 0; i < word.length; i++) {
	  if(word[i] === word[i].toUpperCase()){
	    indexArray.push(i)
	  }
	}
	return indexArray
};
