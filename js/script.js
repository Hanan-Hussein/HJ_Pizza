$('#customize').click(function(e) {
    e.preventDefault();
    $('.toppingsAndCrust,#addtoCart,#customize').toggle("swing");

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

$('#formMenu').submit(function(e) {
    e.preventDefault();
    var sizeV = this.sizes.value;
    var crustName = this.crust.value;
    var toppingName = [];
    toppingName = $("input:checkbox:checked").map(function(bbb) {
        return $(this).val();
    }).get();

    console.log(sizeV);
    console.log(crustName);
    console.log(toppingName);
});