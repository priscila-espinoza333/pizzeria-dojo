var pizza = {
    masa: ["madre", "tradicional", "delgada", "lanzada a mano"],
    tipoSalsa: ["salsa de tomate", "salsa blanca"],
    queso: ["feta", "queso mozzarella"],
    verduras: ["tomate" ,"champiñon", "rucula", "aceitunas", "cebolla", "choclo"],
    proteina: ["salame", "choricillo", "carne", "jamon", "salchicha"],
};

console.log(pizza);

function pizzaOven (masa, tipoSalsa, queso, verduras, proteina){
    var pizza ={}
    pizza.masa = masa;
    pizza.tipoSalsa = tipoSalsa;
    pizza.queso = queso;
    pizza.verduras = verduras;
    pizza.proteina = proteina;

    return pizza;
}

var PizzEstiloChicago = ("tradicional", "mozzarella", "pepperoni", "salchicha");
console.log(PizzEstiloChicago);
     

var mariana = ("lanzada a mano", "ques ")