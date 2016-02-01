function countWords(inputWords) {
      // SOLUTION GOES HERE
     var container = this;
     inputWords.reduce(function(counter,item){
         container.counter=counter;
         return item;
     });
    console.log(container);

}

module.exports = countWords;