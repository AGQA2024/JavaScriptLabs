 // Defining a new object:

 let darthVader = {
    "allegiance": "Empire",
    "weapon": "lightsabre",
    "sith": true,
    "children": 2,
    "childNames": ['Luke', 'Leia']
 }

console.log(darthVader.allegiance)
console.log(darthVader.weapon)
console.log(darthVader.sith)


console.log(darthVader.jedi)
// console.log(darthVader.sith == "sith")

console.log(Object.keys(darthVader).length); //13

console.log(darthVader.children); //16
console.log(darthVader.childNames[0]);


console.log(Object.keys(darthVader)); //Test

//17
for(let key in darthVader){
    // console.log(key)
    // console.log(darthVader[key])
    console.log(`Key: ${key} and value: ${darthVader[key]}`)
}

//18 & 19
console.log("Allegiance before manipulate:" + darthVader.allegiance)
darthVader.allegiance = "The light side";
console.log("Allegiance after manipulate:" + darthVader.allegiance)

//20
console.log("Children before delete:" + darthVader.children)
delete darthVader.children;
console.log(darthVader)
console.log("Children after delete:" + darthVader.children)

// Destructuring an object
// let{allegiance, weapon, sith, childNames} = darthVader;
let{allegiance, sith, weapon, childNames} = darthVader;

console.log(allegiance);
console.log(sith);
console.log(weapon);
console.log(childNames);

darthVader={};
console.log(darthVader)