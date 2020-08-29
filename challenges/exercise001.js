function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substr(0,1).toUpperCase() + word.substr(1,word.length)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0,1) + "." + lastName.substr(0,1)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (vatRate + 100)) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  var reductionValue = originalPrice * (reduction / 100)
  var newPrice = originalPrice - reductionValue
  newPrice = Math.round(newPrice * 100) / 100

  return newPrice
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  var firstchar
  var res

  if (str.length % 2 == 0) {
    firstchar = str.length / 2
    res = str.substr(firstchar - 1, 2)
  } else {
    firstchar = Math.abs(str.length / 2)
    res = str.substr(firstchar, 1)
  }

  return res

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var res = []
 
  for(var i in words) {
    res.push(reverseWord(words[i]))
  }

  return res
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  var linuxUsers = users.filter(function (user) {
    return user.type == "Linux"; 
  });

  return linuxUsers.length

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  var sum = 0
  var len = scores.length

  for(var i in scores) {
    sum = sum + scores[i]
  }

  var mean = sum / len

  return Math.round(mean * 100) / 100

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
