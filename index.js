class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(sentence) {
    const nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitSentence = sentence.split(' ');
    const capitalizedSentenceArr = [];

    splitSentence.forEach(word => {
      if (nonCapitalizedWords.includes(word) && word != splitSentence[0])
        capitalizedSentenceArr.push(word);
      else
        capitalizedSentenceArr.push(Formatter.capitalize(word));
    })

    return capitalizedSentenceArr.join(' ');
  }
}