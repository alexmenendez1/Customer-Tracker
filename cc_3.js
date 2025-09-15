// Coding Challenge 3 //
let customers = [{name:"Eren Yeager",email:"erenyeager@gmail.com", purchases:["Sword", "ODM Gear"]}],
    {name:"Armin Arlert",email:"arminarlert@gmail.com", purchases:["Sword", "ODM Gear"]},
    {name:"Mikasa Ackermann",email:"mikasaackermann@gmail.com", purchases:["Sword", "ODM Gear"]},
   {name:"Hange Zoe",email:"hangezoe@gmail.com", purchases:["Sword", "ODM Gear","Titan Serum"]};

inventory.forEach(obj=> console.log(`${obj.sku} \t|\t ${obj.name}`))
inventory.push({name:"Reiner Braun",email:"reinerbraun@gmail.com", purchases:["Sword", "ODM Gear"]})
