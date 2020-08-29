function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var r = []

  for(var i in nums) {
    if(nums[i] < 1) { r.push(nums[i]) }
  }

  return r
} 

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  var r = []

  for(var i in names) {
    if(names[i].substr(0,1) == char) { r.push(names[i]) }
  }

  return r

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  var r = []

  for(var i in words) {
    if(words[i].substr(0,3) == "to ") { r.push(words[i]) }
  }

  return r

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  var r = []

  for(var i in nums) {
    if(Number.isInteger(nums[i])) { r.push(nums[i]) }
  }

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
  
  var r = []

  for (var i in nums) {
    r.push(Math.round(Math.sqrt(nums[i]) * 100) / 100)
  }

  return r

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  var r = []

  for (var i in sentences) {
    if(sentences[i].toLowerCase().includes(str.toLowerCase())) { r.push(sentences[i]) }
  }

  return r

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  var r = []

  for (var i in triangles) {
    var sorted = triangles[i].sort(function(a, b) {
      return a - b;
    });
    var longest = sorted[sorted.length - 1]
    r.push(longest)
  }

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
