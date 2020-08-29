function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  var res = []
  for (var i in nums) { res.push(nums[i] * nums[i]) }
  return res

} 

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  var res

  for (var i in words) {
    if (i > 0) {
      res = res + words[i].substr(0,1).toUpperCase() + words[i].substr(1,words[i].length).toLowerCase()
    } else {
      res = words[i].toLowerCase()
    }
  }

  return res
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var total = 0

  for (var i in people) {
    total = total + people[i]['subjects'].length
  }

  return total
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  var res = false
  
  for (var i in menu) { 
    if (menu[i]['ingredients'].includes(ingredient)) {
      return true
    }
  }

  return res
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var res = []

  for (var i in arr1) {
    if(!res.includes(arr1[i]) && arr2.includes(arr1[i])) {
      res.push(arr1[i])
    }
  }

  return res.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
