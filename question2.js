function array(start,end){
    let array =[];
    if(start <= end){
        for (let i = start; i <= end; i++) {
         
        array.push(i)
        }
    }else{
        for (let i = start; i >= end; i--) {
           
           
           array.push(i);
          }
    }return array
    
 }
 // here is an exmple
 console.log(array(4, 7));
 console.log(array(-4, 7));