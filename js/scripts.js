//Business logic
function Account(name,initialDeposit,deposit,withdrawal){
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Account.prototype.updateBalance = function () {
  var newBalance = parseInt(this.initialDeposit);
  if (this.deposit !== NaN){
    newBalance += parseInt(this.deposit);
  } else {
    newBalance = parseInt(this.initialDeposit);
  }
  // if (this.withdrawal !== NaN){
  //   newBalance -= parseInt(this.withdrawal);
  // }
    return newBalance;
};



// UI
$(document).ready(function(){
  $("#bank-form").submit(function(event){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputInitialDeposit = $("#initial-deposit").val();

    var newAccount = new Account(inputName,inputInitialDeposit);

    $("#output").show();
    $("#deposit-or-withdraw").show();
    $("#initial-deposit-field").hide();
    $("#output").text(newAccount.initialDeposit);


    $("#bank-form").submit(function(event){
      event.preventDefault();
      var inputDeposit = $("#deposit-amount").val();
      var inputWithdrawal = $("#withdrawal-amount").val();

      newAccount.deposit = inputDeposit;
      newAccount.withdrawal = inputWithdrawal;

      $("#output").text("Your account balance is : $" + newAccount.updateBalance());
    });

  });
});
