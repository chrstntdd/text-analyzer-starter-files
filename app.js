function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getWordData (string) {
  var words = getTokens(string);
  var wordCount = words.length;

  var wordData = {};
  for (let i =  0; i < words.length; i++){
    if (words[i] in wordData){
      wordData[words[i]]++;
    } else {
      wordData[words[i]] = 1;
    }
  }

  var wordLengthArr = []; //init

  for(let i = 0; i < words.length; i++){
    wordLengthArr.push(words[i].length);
  }
  var wordLengthAvg = (wordLengthArr.reduce((a,b) => a + b, 0) / wordCount).toFixed(2);

  var uniqueWordCount = 0; //init
  
  for (var word in wordData){
    if (wordData[word] == 1){
      uniqueWordCount++;
    }
  }
  console.log(wordCount);
  console.log(uniqueWordCount);
  console.log(wordLengthAvg);
  
}

getWordData('No surprise when youre on his shoulder like every night night fight bright night');

