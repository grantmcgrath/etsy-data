// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let array = [];

  // Looped to gather the price from all (25) items and pushed into a new array
  for (var i = 0; i < data.length; i++) {
    let price = data[i].price;

    array.push(price);
  }

  // Added each number in the array together
  let sum = array.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }

  // Divided the total price of all items by the number of items and rounded to the second decimal place
  let bob = sum / data.length;
  // return parseFloat(bob).toFixed(2);
  console.log("The average price is $" + parseFloat(bob).toFixed(2));
}

// console.log("The average price is $" + question1());

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let prices_only_array = [];
  let item = [];

  // Pulls all the prices from the data array and creats a price only array
  for (var i = 0; i < data.length; i++) {
    let price = data[i].price;

    prices_only_array.push(price);
  }

  // Finds the dollar amounts between 14 and 18
  for (var j = 0; j < prices_only_array.length; j++) {
    if (prices_only_array[j] >= 14 && prices_only_array[j] <= 18) {
      item.push(data[j].title);
    }
  }
  // Logs each item on their own console line
  for (var h = 0; h < item.length; h++) {
    console.log(item[h]);
  }
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let gbp = [];

// Looks for the GBP in the currency_code
  for (var c = 0; c < data.length; c++) {
    if (data[c].currency_code === "GBP") {
      gbp.push(data[c].title + " costs " + data[c].price + " pounds");
    }
  }
  // return gbp.toString();
  console.log(gbp.toString());
}

// console.log(question3());

// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let isWood = [];

// Searches through the array data for the word "wood" inside of the materials object
  for (var x = 0; x < data.length; x++) {
    if (data[x].materials.includes("wood")) {
      console.log(data[x].title + " is made of wood.");
    }
  }
  // return isWood.toString();
}
// console.log(question4());

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  let another = [];
  let title = [];

// Finds the objects that have an array of greater then 7 and adds both the materials and title to their own arrays
  for (var b = 0; b < data.length; b++) {
    if (data[b].materials.length > 7) {
      another.push(data[b].materials);
      title.push(data[b].title);
    }
  }

  // Takes the title and materials arrays and logs each value in the correct order on their own lines
  for (var d = 0; d < another.length; d++) {
    let materials = another[d];

// Logs each name to their own line on top of their own list of materials
    console.log(title[d] + " has " + materials.length + " materials:");

// Logs each material to their own line
    for (var m = 0; m < materials.length; m++) {
      console.log("- " + materials[m]);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let made = [];

// Checks to see the number of who_made keys return a true response for equaling "i_did"
  for (var z = 0; z < data.length; z++) {
    let who_made = data[z].who_made;
    if (who_made === "i_did") {
      made.push(data[z].who_made);
    }
  }
  // return made.length + " items were made by their sellers.";
  console.log(made.length + " items were made by their sellers.");
}

// console.log(question6());
