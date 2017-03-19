function getTokens(string) {
  return string.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(string) {
  return string.replace(/\r?\n|\r/g, '');
}

function getDistinctWordCount(tokens) {
  var distinctWords = [];
  for (let i = 0; i < tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1) {
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}

function getAvgWordLength(tokens) {
  var totalLength = tokens.join('').length;
  return (totalLength / tokens.length).toFixed(2)
}

function writeToPage(string) {
  var tokens = getTokens(string);
  var intDistinctWords = getDistinctWordCount(tokens);
  var intTotalWords = tokens.length;
  var avgWordLength = getAvgWordLength(tokens);

  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(intTotalWords);
  textReport.find('.js-unique-word-count').text(intDistinctWords);
  textReport.find('.js-avg-word-length').text(avgWordLength + ' characters');
  textReport.removeClass('hidden');
}

function handleFormSubmit() {
  $('.js-text-form').submit(function (e) {
    e.preventDefault();
    var userText = $(this).find('#user-text').val();
    writeToPage(removeReturns(userText));
  });
}

$(function () {
  handleFormSubmit();
});


/* My first attempt */


// function getWordData(string) {
//   var words = getTokens(string);
//   var wordData = {};
//   var wordMetrics = {};

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] in wordData) {
//       wordData[words[i]]++;
//     } else {
//       wordData[words[i]] = 1;
//     }
//   }

//   wordMetrics.count = (function (words) {
//     return getTokens(string).length;
//   })();

//   wordMetrics.avgWordLength = (function () {
//     wordLengthArr = [];
//     for (let i = 0; i < words.length; i++) {
//       wordLengthArr.push(words[i].length);
//     }
//     return Number((wordLengthArr.reduce((a, b) => a + b, 0) / wordMetrics.count).toFixed(2));
//   })();

//   wordMetrics.uniqueWordCount = (function () {
//     var uniqueWordCount = 0;
//     for (var word in wordData) {
//       if (wordData[word] == 1) {
//         uniqueWordCount++;
//       }
//     }
//     return uniqueWordCount;
//   })();

//   console.log(wordMetrics);
//   return wordMetrics;
// }