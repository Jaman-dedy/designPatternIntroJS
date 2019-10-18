let name = 'john';

function sayHi(){
    console.log('hi', name);
}

name = 'Pete';

sayHi();

// second case

function makeWorker() {
  let fname = 'pete';
  return function() {
    console.log('fname : ', fname);
  };
}

let fname = 'john';

let work = makeWorker();
work();

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
    if (num > max_num) {
    // (Fill in the missing line here)
    }
    }
    return max_num;
    }
