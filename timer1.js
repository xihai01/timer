const timer = function(args) {
  //for each of the arguments
  for (let num of args) {
    //convert num into a number
    num = Number(num);
    //set alarm only if argument is a number and >- 0
    if (num && num >= 0) {
      //multiply num by 1000
      num *= 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num);
    }
    console.log('hi');
  }
};

//get arguments
const args = process.argv.slice(2);
timer(args);