let number;
let sum=0;
function solution(number){
  for(number=1;number<10;++number){
      
    if(number%3==0||number%5==0){
       sum+=number;
    }
  }
  console.log(sum);
}
solution(number);