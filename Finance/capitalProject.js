
$('#getResult').on('click', generateResult);
$('#capitalv').val(400);
$('#fdratev').val(9.75);
$('#investmentratev').val(15);
$('#withdrawalamountv').val(10);
$('#timev').val(5);

var capital, fd_rate ,total_interest ,fd_interest_growth_rate , withdraw_amount , fd_interest , time_period ;



function generateResult() {

  
  total_interest = 0;
  fd_interest = 0;

  fd_interest_growth_rate = parseFloat($('#investmentratev').val()) ;
  withdraw_amount = parseFloat($('#withdrawalamountv').val()) ;
  capital = parseFloat($('#capitalv').val()) ;
  fd_rate = parseFloat($('#fdratev').val()) ;
  time_period = parseFloat($('#timev').val()) ;

  fd_interest =  ((capital * fd_rate) / 100) - withdraw_amount;
  

  for (i = 1; i <= time_period; i++) {

    total_interest += (fd_interest * (Math.pow((1 + fd_interest_growth_rate / 100), i)));

    console.log(fd_interest * (Math.pow((1 + fd_interest_growth_rate / 100), i)));
  }

  var totalCapital= total_interest + capital;
  var totalAfterTax= (total_interest*0.9) + capital;
  var effectiveRate= (Math.exp(1 / time_period * Math.log(((total_interest + capital) / capital))) - 1) * 100;

  $('#results').html(`<br> Total interest (in lacs): ${Math.trunc(total_interest)}  <br> Total capital (in lacs) at the end of ${time_period} years: ${totalCapital.toFixed(2) }<br>After tax: ${totalAfterTax.toFixed(2)}<br>Effective interest rate: ${effectiveRate.toFixed(2)}`);

  



}