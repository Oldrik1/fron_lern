let credit = 23580;
const pricePerDroid = 3000;
let droid = prompt("Введіть кількість дроідів");




if(droid == null){
    alert("Скасованно")
} else if (droid >= 0) {
          for (let i = 1; i <= droid; i++) {
              let Col = droid * pricePerDroid;
              let totalPrice = credit - Col;
              console.log(totalPrice)
              if (totalPrice <= 0) {
                  console.log("У вас не вистачає коштів на" + " " + droid + " " + "дронів")
              }

          }
      }



