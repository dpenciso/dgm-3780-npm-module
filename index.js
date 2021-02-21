function talk(string) {
  return string;
}

function yell(string) {
  if (typeof string === str) {
    return string.toUpperCase();
  } else {
    return "You can only yell a string";
  }
}

function whisper(string) {
  if (typeof string === str) {
    return string.toLowerCase();
  } else {
    return "You can only whisper a string";
  }
}

function noSpace(string) {
  if (typeof string === str) {
    return string.split(" ").join("");
  } else {
    return "You can only no space a string";
  }
}

function numToLetter(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if ((numbers[i] = 0)) {
      return "a";
    } else if ((numbers[i] = 1)) {
      return "b";
    } else if ((numbers[i] = 2)) {
      return "c";
    } else if ((numbers[i] = 3)) {
      return "d";
    } else if ((numbers[i] = 4)) {
      return "e";
    } else if ((numbers[i] = 5)) {
      return "f";
    } else if ((numbers[i] = 6)) {
      return "g";
    } else if ((numbers[i] = 7)) {
      return "h";
    } else if ((numbers[i] = 8)) {
      return "i";
    } else if ((numbers[i] = 9)) {
      return "j";
    } else if ((numbers[i] = 10)) {
      return "k";
    } else if ((numbers[i] = 11)) {
      return "l";
    } else if ((numbers[i] = 12)) {
      return "m";
    } else if ((numbers[i] = 13)) {
      return "n";
    } else if ((numbers[i] = 14)) {
      return "o";
    } else if ((numbers[i] = 15)) {
      return "p";
    } else if ((numbers[i] = 16)) {
      return "q";
    } else if ((numbers[i] = 17)) {
      return "r";
    } else if ((numbers[i] = 18)) {
      return "s";
    } else if ((numbers[i] = 19)) {
      return "t";
    } else if ((numbers[i] = 20)) {
      return "u";
    } else if ((numbers[i] = 21)) {
      return "v";
    } else if ((numbers[i] = 22)) {
      return "w";
    } else if ((numbers[i] = 23)) {
      return "x";
    } else if ((numbers[i] = 24)) {
      return "y";
    } else if ((numbers[i] = 25)) {
      return "z";
    } else {
      return "values must be a number 0-25";
    }
  }
}

module.exports = { talk, yell, whisper, noSpace, numToLetter };
