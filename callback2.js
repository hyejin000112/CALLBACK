function fn_fakeAsync(sum,callback){
    
   
    
    callback(sum);
  }
  

  function forTest(){
    let sum=0;
    for(let i = 0; i < 100; i++){
        sum += i;
    }
    return sum;
  }

  
// //   sumTestResult = sumTest();

  fn_fakeAsync(forTest(),function(sum){
    console.log(`${sum}`);
  });
// let output = '';

//https://lovestudycom.tistory.com/entry/%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98%EB%A5%BC-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%82%98
//https://lovestudycom.tistory.com/entry/%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98%EB%A5%BC-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%82%98