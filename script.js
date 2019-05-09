var cost = [];
var products = [];
var prices = [];
var name;
var currentRandomStuff = 0;
$(".add-items").click(function() {
name = $(".product-name").val();
cost = parseInt($(".product-cost").val());
products.push(name);
prices.push(cost);
currentRandomStuff += cost;
console.log(products);
$(".name").append("<ul>" + name + "</ul>");
$(".price").append("<ul>" + "$" + cost + "</ul>");
});

var randomStuff = [];
$(".add-items").click(function() { 
    console.log(currentRandomStuff);
        $(".cart").html("Number of items: " + prices.length + "<br>" + "Total Cost:$" +  currentRandomStuff );
});
function checkout(){
    alert("Your total is $" + currentRandomStuff + ",Thank you for shopping at JT's Collection Store." + " Come back soon!");
}
$(".checkout-items").click(function(){
    checkout();
});



    
    
    
    
    
    
    
    
   