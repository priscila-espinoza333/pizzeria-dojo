var pizza = {
    masa: ["madre", "tradicional", "delgada", "lanzada a mano"],
    tipoSalsa: ["salsa de tomate", "salsa blanca"],
    queso: ["feta", "queso mozzarella"],
    verduras: ["tomate" ,"champiñones", "rucula", "aceitunas", "cebollas", "choclo"],
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

var PizzEstiloChicago = ("tradicional", "mozzarella", ["pepperoni", "salchicha"]);
console.log(PizzEstiloChicago);
     

var PizzaMariana = ("lanzada a mano", ["mozzarella, feta"], ["champiñones, aceitunas,cebollas"])
console.log(PizzaMariana);

var PizzaRoma = ("delgada", "mozzarella", ["salsa de tomate", "salsa blanca"] ,["champiñones, aceitunas"]);
console.log(PizzaRoma);

var PizzVegana = ("tradicional", "mozzarella", ["tomate" ,"champiñones", "rucula", "aceitunas", "cebollas", "choclo"]);
console.log(PizzEstiloChicago);