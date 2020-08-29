function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var r = []

  nums.forEach(function (num) {
    if(num < 1) { r.push(num) }
  })

  return r
} 

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  var r = []

  names.forEach(function (name) {
    if(name.substr(0,1) == char) { r.push(name) }
  })

  return r

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  var r = []

  words.forEach( function(word) {
    if(word.substr(0,3) == "to ") { r.push(word) }
  })

  return r

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  var r = []

  nums.forEach(function(num) {
    if(Number.isInteger(num)) { r.push(num) }
  })

  return r

}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  var r = []

  for(var i in users) {
    r.push(users[i]['data']['city']['displayName'])
  }

  return r

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  var r = nums.map(function(num) {
    var sqrt = Math.round(Math.sqrt(num) * 100) / 100
    return sqrt
  })

  return r

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var r = sentences.filter(function(sentence) {
    return sentence.toLowerCase().includes(str.toLowerCase())
  })

  return r

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  var r = triangles.map(function(triangle) {
    var sorted_triangle = triangle.sort(function(a,b) {
      return a - b;
    })
    return sorted_triangle[sorted_triangle.length - 1]
  })

  return r
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
