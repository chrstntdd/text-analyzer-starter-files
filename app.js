function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getWordData(string) {
  var words = getTokens(string);
  var wordData = {};
  var wordMetrics = {};

  for (let i = 0; i < words.length; i++) {
    if (words[i] in wordData) {
      wordData[words[i]]++;
    } else {
      wordData[words[i]] = 1;
    }
  }

  wordMetrics.count = (function (words) {
    return getTokens(string).length;
  })();

  wordMetrics.avgWordLength = (function () {
    wordLengthArr = [];
    for (let i = 0; i < words.length; i++) {
      wordLengthArr.push(words[i].length);
    }
    return Number((wordLengthArr.reduce((a, b) => a + b, 0) / wordMetrics.count).toFixed(2));
  })();

  wordMetrics.uniqueWordCount = (function () {
    var uniqueWordCount = 0;
    for (var word in wordData) {
      if (wordData[word] == 1) {
        uniqueWordCount++;
      }
    }
    return uniqueWordCount;
  })();

  //console.log(wordMetrics);
  return wordMetrics;
}

getWordData('No surprise when youre on his shoulder like every night night fight bright night');