//Business Logic
function PizzaCost(size1,size2,size3,toppings1,toppings2,toppings3){
  this.size1 = size1;
  this.size2 = size2;
  this.size3 = size3;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;

  if(this.size1 !== 6 ){
    this.size1 = 0;
  }
  if(this.size2 !== 12){
    this.size2 = 0;
  }
  if(this.size3 !== 16){
    this.size3 = 0;
  }
  if(this.toppings1 !== 2){
    this.toppings1 = 0
  }
  if(this.toppings2 !== 3){
    this.toppings2 = 0
  }
  if(this.toppings3 !== 5){
    this.toppings3 = 0
  }
}

var a = NaN ;

var a = a || 0;

PizzaCost.prototype.sum = function(){
  return this.size1 + this.size2 + this.size3 + this.toppings1 + this.toppings2 + this.toppings3;
}

//User Interface Logic
$(document).ready(function(){
  $("form#pizza-menu").submit(function(event){
    event.preventDefault();

    //Size

    var inputtedSize1 = parseInt($("input[name='size1']:checked").val());
    var inputtedSize2 = parseInt($("input[name='size2']:checked").val());
    var inputtedSize3 = parseInt($("input[name='size3']:checked").val());

    //toppings

    var inputtedToppings1 = parseInt($("input[name='toppings1']:checked").val());
    var inputtedToppings2 = parseInt($("input[name='toppings2']:checked").val());
    var inputtedToppings3 = parseInt($("input[name='toppings3']:checked").val());

    var newPizza = new PizzaCost(inputtedSize1,inputtedSize2,inputtedSize3,inputtedToppings1,inputtedToppings2,inputtedToppings3);

    var Total = newPizza.sum();

    $("span#order-cost").text(Total+ " " + "Dollars");



    parseInt($("input[name='size1']:checked").val(""));
    parseInt($("input[name='size2']:checked").val(""));
    parseInt($("input[name='size3']:checked").val(""));
    parseInt($("input[name='toppings1']:checked").val(""));
    parseInt($("input[name='toppings2']:checked").val(""));
    parseInt($("input[name='toppings3']:checked").val(""));






  });
});
