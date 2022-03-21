var form = document.querySelector('#formMenu');
$('#customize').click(function(e) {
    e.preventDefault();

    $('.toppingsAndCrust,#addtoCart,#customize').toggle("swing");
    // $('#priceValue').html(userPizza.fullPrice());

});
$('.caroues').hover(function() {
    $(this).toggleClass('cardColor');
    $('card-title').css('color', 'red')
});

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
    } else {
        return 150
    }

}

function delivery(address) {
    this.address = address;
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
    form = document.querySelector('#formMenu');
    sizeV = form.sizes.value;
    crustName = form.crust.value;
    // pizzaNameTitle = $('.pizzaName').html();


    crust = new CrustType(crustName);
    toppingName = [];
    toppingName = $("input:checkbox:checked").map(function(bbb) {
        return $(this).val();
    }).get();


    [x, y, z] = toppingName;
    newTopping1 = new Toppings(x);
    newTopping2 = new Toppings(y);
    newTopping3 = new Toppings(z);
    userPizza.crustType.push(crust);
    userPizza.toppings.push(newTopping1, newTopping2, newTopping3);
    console.log(userPizza.fullPrice());
    console.log(sizeV);
    console.log(crustName);
    $('#priceValue').html(userPizza.fullPrice());
    // e.preventDefault();


});
Items = [];
totalPricing = 0;
$('#formMenu').submit(function(e) {
    e.preventDefault();
    form = document.querySelector('#formMenu');
    sizeV = form.sizes.value;
    pizzaNameTitle = form.flavor.value;
    crustName = form.crust.value;
    toppingName = [];
    toppingName = $("input:checkbox:checked").map(function(bbb) {
        return $(this).val();
    }).get();


    [x, y, z] = toppingName;
    newTopping1 = new Toppings(x);
    newTopping2 = new Toppings(y);
    newTopping3 = new Toppings(z);
    userPizza = new Pizza(pizzaNameTitle, sizeV);


    userPizza.toppings.push(newTopping1, newTopping2, newTopping3);
    crust = new CrustType(crustName);

    userPizza.crustType.push(crust);
    Items = [];
    Items.push(userPizza);
    console.log(Items);

    // console.log(totalPrice(userPizza));
    Items.forEach(function(item) {
        // $("ul#cart").append(" <div class=''titlehead>" + "<li>" + "Name" + "</li>" + "</div>");

        $("ul#cart").append("<div class='titlehead'>" + "<li>" + item.name +
            "</li>" + "<li>" +
            item.size + "</li>" + "<li>" +
            item.fullPrice() + "</li>" +
            "</div>");
        totalPricing += item.fullPrice();
    });
    $('#overarllPrice').html(totalPricing);
    $('#cartbar,#menubar').toggle();
});

$('.back').click(function(e) {
    e.preventDefault();
    $('#cartbar,#menubar').toggle();

});
$('#gotoCart').click(function(e) {
    e.preventDefault();
    $('#cartbar,#menubar').toggle();

});
$('#orderForm input').click(function(e) {
    var checkoutForm = document.querySelector('#orderForm');
    var delivery = checkoutForm.delivery.value;
    console.log(delivery);
    if (delivery === "no") {
        $('.location').hide();
    } else if (delivery === "yes") {
        $('.location').show();
    }
});
$('#orderForm').submit(function(e) {
    e.preventDefault();
    if ($((this).delivery.value) === "yes") {
        alert("Thank you for shopping with us,The rider is sending your order ");

    } else {
        alert("Thank you for shopping with us, We will notify you when your order is ready for pickup")
    }
})