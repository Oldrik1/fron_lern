let China = 100;
let Chili = 250;
let Australia = 170;
let India = 80;
let Jamaica = 120;

let country = prompt("Виберіть країну");

switch(country.toLowerCase()) {
    case "китай":
        alert("Доставка в " + country + " буде коштувати " + China + " кредитів");
        break;
    case "чилі":
        alert("Доставка в " + country + " буде коштувати " + Chili + " кредитів");
        break;
    case "австралія":
        alert("Доставка в " + country + " буде коштувати " + Australia + " кредитів");
        break;
    case "індія":
        alert("Доставка в " + country + " буде коштувати " + India + " кредитів");
        break;
    case "ямайка":
        alert("Доставка в " + country + " буде коштувати " + Jamaica + " кредитів");
        break;
    default:
        alert("У країні "+ country +" доставка недоступна");
}
