const isPalindrom = function (array) {
  let k = 1;
  for (let i = 0; i < array.length / 2; i++) {
    let fitst = array[i];
    let end = array[array.length - k];
    if (fitst !== end) {
      return false;
    } else {
      k++;
    }
  }
  return true;
};

console.log(isPalindrom([2, 4, 4, 2]));
