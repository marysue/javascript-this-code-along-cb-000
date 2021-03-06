const app = "I don't do much."


function Sandwich(bread, ingredients, name) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.name = name;
    this.describe = function() {
      console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
    }
  }
   
    
function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}
   
function deliverFood(customer, table) {
    console.log("Delivering " + this.name + " to " + customer + " at table " + table);
  }

  var salad = {
    ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
    name: "Steak Caesar"
  }

function visitTable() {
    console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
  }

  function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
  }
   
  


var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");
var describeSalad = pbj.describe.bind(salad);

blt.name = "BLT";

pbj.describe();
pbj.describe.call(salad);

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);
serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);

salad.describe = pbj.describe.bind(salad);

//create new Customer instance
var sally = new Customer("Sally", "4");
 
//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);