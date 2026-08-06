


function process(cart, Tax){
    
    let valid = [];

    for(let item of cart){
        if(!item.inStock || item.quantity<=0){
            continue;
        }
        if(item.caegory === "ELECTRONICS"){
            item.price=item.price - item.price*0.10;
        }
        valid.push({
            id : item.id,
            name : item.name,
            unitprice : item.price,
            quantity : item.quantity,
            itemTotal : item.price * item.quantity
        })
    }

    let count = 0; 
    let total = 0;
    let grandtotal = 0;

    for(let item of valid){
        count += item.quantity;
        total += item.unitprice;         
    }

    return {
        validItems : valid,
        itemCount : count,
        subtotal : total,
        tax : total*Tax,
        grandTotal : total + total*Tax
    }

}

const rawCart = [
  { id: "ITEM_1", name: "Wireless Mouse", price: 50, quantity: 2, inStock: true, category: "ELECTRONICS" },
  { id: "ITEM_2", name: "Desk Lamp", price: 30, quantity: 0, inStock: true, category: "HOME" },
  { id: "ITEM_3", name: "Gaming Headset", price: 100, quantity: 1, inStock: false, category: "ELECTRONICS" },
  { id: "ITEM_4", name: "Mechanical Keyboard", price: 120, quantity: 1, inStock: true, category: "ELECTRONICS" },
  { id: "ITEM_5", name: "Notebook", price: 5, quantity: 4, inStock: true, category: "STATIONERY" }
];

const tax = 0.08; 

console.log(process(rawCart , tax));