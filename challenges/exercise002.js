function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich['fillings']
} 

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person['city'] == "Manchester"
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  
  var busNum = Math.floor(people / 40)
  if ( people % 40 != 0 ) { busNum += 1 }

  return busNum

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count = 0

  for (var i in arr) {
    if(arr[i] == "sheep") { count++ }
  }

  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person['address']['postCode'].substr(0,1) == 'M' && person['address']['city'] == 'Manchester')
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
