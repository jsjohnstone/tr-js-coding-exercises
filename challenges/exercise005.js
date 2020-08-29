const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  var indexN = nums.findIndex(num => num === n)

  if(indexN == -1 || indexN == (nums.length - 1)) {
    return null
  } else {
    return nums[indexN + 1]
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var count = { 0: 0, 1: 0 }
};

const reverseNumber = n => parseInt(n.toString().split("").reverse().join(""));

const sumArrays = arrs => arrs.map(subarrs => subarrs.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0)

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if(arr.length > 1) {
    var first = arr[0]
    var last = arr[arr.length - 1]
    arr[0] = last
    arr[arr.length - 1] = first
  }

  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  var r = haystack.find(property => property.includes(searchTerm))

  return r
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
