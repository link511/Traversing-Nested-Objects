// Objects in Objects

const userInfo = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Axibook Labs',
    jobTitle: 'Developer Apprentice'
  },
  friends: [{
    firstName: 'Nancy',
    lastName: 'Burgess',
    company: {
      name: 'Axibook Labs',
      jobTitle: 'Developer Apprentice'
    }
  },
  {
    firstName: 'Corinna',
    lastName: 'Jackson',
    company: {
      name: 'Axibook Labs',
      jobTitle: 'Lead Developer'
    }
  }],
  projects: [{
    title: 'Axibook',
    description: 'The premier Academy Xi-based social network in the world.'
  },
  {
    title: 'Scuber',
    description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  }]
};

console.log(userInfo.lastName);
console.log(userInfo.company.jobTitle);
console.log(userInfo.friends, userInfo.projects);
console.log(userInfo.friends[0].firstName);
console.log(userInfo.friends[0].lastName);
console.log(userInfo.projects[1].title);

function shallowIterator(target) {
  for (const key in target) {
    console.log(target[key]);
  }
}

console.log(shallowIterator(userInfo));


// Arrays in arrays
/*
const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]];
console.log(letters[1]);
console.log(letters[1][1]);
console.log(letters[1][1][1]);
*/

function deepIterator(target) {
  console.log("Argument: ", target);
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log("Logged value: ", target);
  }
}

const numbers = [1, [2, [4, [5, [6]], 3]]];

deepIterator(numbers);

function isOdd(element) {
  return (element % 2 === 1);
}

console.log([4, 6, 8, 10].find(isOdd)); //=> undefined, not found
console.log([4, 5, 8, 10].find(isOdd)); //=> 5
console.log([4, 5, 7, 8, 10].find(isOdd)); //=> 5
console.log([4, 7, 5, 8, 10].find(isOdd)); //=> 7