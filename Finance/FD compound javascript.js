var capital=400;
var fd_rate=9.75;
var total_interest=0;

var fd_interest_growth_rate=25;
var withdraw_amount=0;

var fd_interest=capital*(fd_rate/100) - withdraw_amount;

var time_period=5;

for (i=1;i<=5;i++){
  
  
  
  total_interest+= (fd_interest*(Math.pow( (1+fd_interest_growth_rate/100) , i )   ))
}

console.log(`total interest: ${Math.trunc(total_interest)}`);
console.log(`effective interest rate: ${(Math.exp(1 / time_period * Math.log(((total_interest+capital)/capital)))-1)*100}`);
