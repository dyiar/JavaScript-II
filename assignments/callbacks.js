// Create a callback function and invoke the function to test your work. You have been provided an example of a 
// problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  // //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // // Potential Solution:
  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // firstItem(items, function(first) {
  //   console.log(first)
  // });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(last) {
  console.log(last)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

sumNums(3, 6, function(sum) {
  console.log(sum)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(9,20, function(multiply) {
  console.log(multiply)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }

}

contains('Gum', items, function(inside) {
  console.log(inside);
});

/* STRETCH PROBLEM */

const animals = ["cat", "cat", "dog", "giraffe", "cat", "dog", "pig", "cow"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDupes = [];
  
  noDupes = array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });

  return cb(noDupes);
}
//   let unique = array.filter((duplicate) => {
//     return duplicate.array === array;
//   });
// }


//   const noDuplicates = array;
//   noDuplicates.push("");
//   for (let i=0; i<array.length; i++) {
//     if (array.includes(array[i])) {
//       noDuplicates.splice(i-1, 1);
//     } else {
//       continue;
//     };
//   }

//   return cb(noDuplicates);


// }

removeDuplicates(animals, function(remove) {
  console.log(remove);
});