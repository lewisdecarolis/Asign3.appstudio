let states = ["Nebraska", "Iowa", "Minnesota", "South Dakota", "North Dakota", "Kansas", "Oklahoma", "Texas"] 



function reverseStates(states) {
  var newArray = [];
  for (var i = states.length - 1; i >= 0; i--) {
    newArray.push(states[i]);
  }
  return newArray;
  }
console.log(reverseStates)