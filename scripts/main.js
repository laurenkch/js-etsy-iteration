//-----AVERAGE PRICE

//this is what I originally did:

// function getAverage(items){
//     let arr = [];
//     for(const object of items) {
//             arr.push(object.price);
//         };
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     };
//     sum = (sum/arr.length).toFixed(2);
//     console.log(`The average price is $${sum}`);
//     return sum;
//   }
// getAverage(items);


const total = items.map(function(item) {
    return item.price;
}).reduce(function(total, current) {
    return total + current;
});

const average = (total / items.length).toFixed(2);
console.log(`The average price is $${average}`);

//ITEMS BETWEEN $14 AND $18

function arrayOfItems (items) {
    // const newList = items.map(function(item) {
    //     return item.title
    // })
    let newArray = items.filter(function(object) {
        return object.price >= 14.00 && object.price <= 18.00});
    
    console.log(`Items that cost between $14.00 USD and $18.00 USD:`);

    console.log(newArray);
};

arrayOfItems(items);

// GBP currency code.

function getGBP(items) {
    let item = items.filter(function(object) {
        return object[`currency_code`] === 'GBP'});
    console.log(`${item[0].title} costs $${item[0].price}`);
};

getGBP(items);

//MADE OF WOOD

function testForWood(items) {
    let woodenItems = items.filter(object => object.materials.includes('wood'));
    woodenItems.forEach(i => console.log(i.title));
    };

testForWood(items);

// 8 OR MORE MATERIALS

function eightOrMore(items) {
    let eightPlus = items.filter(object => object.materials.length >=8);
    eightPlus.forEach(function(i) {console.log(i.title);
        console.log(i.materials.join('\n'));
    });
};

eightOrMore(items);

//MADE BY SELLERS

function madeBySellers(items) {
    const handMade = items.filter(object => {return object.who_made === 'i_did'});
    console.log(`${handMade.length} were made by their sellers`);
}

madeBySellers(items);