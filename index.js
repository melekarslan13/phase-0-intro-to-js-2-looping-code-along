// Code your solutions in this file



function writeCards(names,event) {
     // the initialization moves OUTSIDE the body of the loop!
   const arr=[];
    for (let i = 0; i< names.length;i++) {
      arr[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       // the iteration moves INSIDE the body of the loop!
    }
  
    return arr;
  }
  function countDown(num){
      while(num>=0){
      console.log(num)
   num--

  }}