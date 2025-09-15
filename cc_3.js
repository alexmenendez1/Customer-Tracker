// Coding Challenge 3 //
let customers = ["Eren Yeager","erenyeager@gmail.com", ["Sword Set", "ODM Gear"]],
    ["Armin Arlert", "armin@gmail.com", ["Sword Set", "ODM Gear"]],
    ["Mikasa Ackermann", "mikasaackermann@gmail.com", ["Sword Set", "ODM Gear"]],
   ["Hange Zoe", "hangezoe@gmail.com",["Sword Set ", "ODM Gear"]];


customers.push("Reiner Braun", "reinerbraun@gmail.com", ["Sword Set", "ODM Gear"])
xyz= customers.shift()
console.log(xyz)

customers[1]= 'arminarlert@gmail.com'
console.log(customers)
newPurchase= customers[2]
newPurchase.push("Scout Regiment Robe")
console.log(newPurchase)

customers.forEach(obj=> console.log(`${customers}))
    