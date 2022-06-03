//code1
let array = [1,2,3,4,5,-5]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

// space complexity: O(1)
//time complexity: O(n^2)


//code2
let word = ('James Goff')

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars(word))
// space complexity: O(n)
//time complexity: O(1)


//code3
const isPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
// space complexity: O(n)
//time complexity = o(n)



//code4
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

  console.log(findLongestWord("The quick brown fox jumpedweerfgbxcghfhdgggdhfg over the lazy dog"))
  // space complexity: O(n)
  //time complexity: O(n)




