$('#customize').click(function(e){
    e.preventDefault();
    $('.toppingsAndCrust,#addtoCart,#customize').toggle("slow");

});
//pizza constructor
function Pizza(name,size,crustType,price,toppings){
    this.name=name;
    this.size=size;
    this.crustType=crustType;
    this.price=price;
    this.toppings=toppings;
}

//crustType constructor
function CrustType(name){
    this.name=name;
 

}
CrustType.prototype.crustPrice=function(){
    if(this.name==='crispy'){
        return 200;
    }
    else if(this.name==='stuffed'){
        return 250;
    }
    else if(this.name==='gluttenFree'){
        return 150;
    }
}

