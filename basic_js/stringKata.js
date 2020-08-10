function getStrings(city){
  let result = [];

  for(let value of [...city.toLowerCase()]) {
    const ln = result.length;
    let isEl = false;
    if (ln) {
      for(let i = 0; i < ln; i++) {
        if (result[i][0] === value) {
          result[i] = result[i] + "*";
          isEl = true;
          break;
        }
      }

      if (!isEl && value !== " ") {
        result.push(value + ":*");
      }
    } else {
      result.push(value + ":*");
    }
  };

  return result.join(',');
};
