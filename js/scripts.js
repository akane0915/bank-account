//Business logic
function Account(name,initialDeposit,deposit,withdrawal){
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}










// UI
$(document).ready(function(){
  $("#bank-form").submit(function(event){
    event.preventDefault();

    var inputName = $("#name").val();
    var inputInitialDeposit = $("#initial-deposit").val();

    var newAccount = new Account(inputName,inputInitialDeposit);

    var inputDeposit = $("#deposit-amount").val();
    var inputWithdrawal = $("#withdrawal-amount").val();

    $("#output").show();
    $("#deposit-or-withdraw").show();
    $("#initial-deposit-field").hide();
    $("#output").text(newAccount.initialDeposit);

    console.log(inputDeposit, inputWithdrawal);
  });
});
