$('#customize').click(function(e){
    e.preventDefault();
    $('.toppingsAndCrust,#addtoCart,#customize').toggle("slow");

});
//pizza constructor
function Pizza(name,size){
    this.name=name;
    this.size=size;
    this.crustType=[];
    this.toppings=[];
}
//size price prototype
Pizza.prototype.sizePrice=function(){
    if(this.size==="small"){
        return 500;
    }
    else if(this.size==="medium"){
        return 800;
    }
    else if(this.size==="large"){
        return 1200;
    }
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
function Toppings(toppingName,toppingPrice){
    this.toppingName=toppingName;
    this.toppingPrice=toppingPrice;
}
toppingPrice.prototype.Toppings=function(){
    if(this.toppingName==="chesse"){
        return 150;
    }
    else if(this.toppingName==="pepporoni"){
        return 120;
    }
    else if(this.toppingName==="olive"){
        return 100;
    }
    
}
