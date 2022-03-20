$('#customize').click(function(e) {
    e.preventDefault();

    $('.toppingsAndCrust,#addtoCart,#customize').toggle("swing");
    // $('#priceValue').html(userPizza.fullPrice());

});
//pizza constructor
function Pizza(name, size) {
    this.name = name;
    this.size = size;
    this.crustType = [];
    this.toppings = [];
}
//fullprice protype
Pizza.prototype.fullPrice = function() {
        var totalToppingPrice = 0;
        this.toppings.forEach(topping => {
            totalToppingPrice += topping.toppingPrice();
        });

        var total = totalToppingPrice + this.sizePrice() + this.crustType[0].crustPrice();
        return total;

    }
    //size price prototype
Pizza.prototype.sizePrice = function() {
        if (this.size === "small") {
            return 500;
        } else if (this.size === "medium") {
            return 800;
        } else if (this.size === "large") {
            return 1200;
        }
    }
    //crustType constructor
function CrustType(name) {
    this.name = name;
}
CrustType.prototype.crustPrice = function() {
    if (this.name === 'crispy') {
        return 200;
    } else if (this.name === 'stuffed') {
        return 250;
    } else if (this.name === 'gluttenFree') {
        return 150;
    }

}

function Toppings(toppingName) {
    this.toppingName = toppingName;
}
Toppings.prototype.toppingPrice = function() {
    if (this.toppingName === "cheese") {
        return 150;
    } else if (this.toppingName === "pepporoni") {
        return 120;
    } else if (this.toppingName === "olive") {
        return 100;
    } else {
        return 0;
    }

}



$('#formMenu input').click(function(e) {
    // e.preventDefault();
    form = document.getElementById('formMenu');
    sizeV = form.sizes.value;
    crustName = form.crust.value;
    pizzaNameTitle = $('.pizzaName').html();


    var crust = new CrustType(crustName);
    var toppingName = [];
    toppingName = $("input:checkbox:checked").map(function(bbb) {
        return $(this).val();
    }).get();

    // toppingUser = toppingName.map(function(topper) {
    //     return new Toppings(topper);
    // }).get();
    // console.log(toppingUser);
    var [x, y, z] = toppingName;
    var newTopping1 = new Toppings(x);
    var newTopping2 = new Toppings(y);
    var newTopping3 = new Toppings(z);
    userPizza = new Pizza(pizzaNameTitle, sizeV);
    userPizza.crustType.push(crust);
    userPizza.toppings.push(newTopping1, newTopping2, newTopping3);
    console.log(userPizza.fullPrice());
    console.log(sizeV);
    console.log(crustName);
    $('#priceValue').html(userPizza.fullPrice());

});