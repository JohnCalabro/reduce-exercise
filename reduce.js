/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
  return arr.reduce(function(acc,next){
      acc.push(next[key]);
      return acc;
  },[]);
}
//couldn't solve it, but I understand it:
//1. passed in arr and key 
//2. returned arr.reduce passing in accumulator and next value
//3. the second argument is an empty arr, we want the starting point to be an empty
//arr 
//4. we then pushed the the value of the next item's key onto the empty arr we start at
//5. we then return the accum to get our populated arr, 



/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
 const vows = 'aeiou'
 let strArr = str.split('')

  return strArr.reduce((acc, next) => {
    let lower = next.toLowerCase()
    if(vows.indexOf(lower) !== -1){
      if(acc[lower]){
        acc[lower] += 1;
      }
      else{
        acc[lower] = 1;
      }
      
    }
return acc;
    
  }, {})
  
}


/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
   return arr.reduce((acc, next) => {
    console.log(acc)
    next[key] = value;
    return acc;
  }, arr)
  
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

// function partition(arr, callback) {}


//confused looked at solution now it makes sense.
function partition(arr, cb){
  return arr.reduce(function(acc,next){
      if(cb(next)){ //if out cb func (w/e it is) returns true
          acc[0].push(next); //^^add that true return to the first array
      } else {
          acc[1].push(next); //if false push it into the second array
      }
      return acc;  //then return the acculator 
  }, [[],[]]);//    ^^acc started as two empty arrays that are now populated when recude 
  //did its callback on each element in the array we pass into the function
}