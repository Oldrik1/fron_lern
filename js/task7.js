function checkStorage(available, ordered) {


    if (ordered === 0) {
        alert("У замовленні немає товарів");
    } else if (ordered > available) {
        alert("Ваше замовлення занадто велике, на складі недостатньо товарів!");
    } else {
        alert("Замовлення прийнято, наш менеджер зв'яжеться з Вами.");
    }



}
checkStorage(1,2)