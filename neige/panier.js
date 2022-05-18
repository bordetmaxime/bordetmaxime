function saveBasket(basket){
    locaStorage.setItem("basket",basket);
}

function getBasket (){
    localStorage.getItem('basket');
}