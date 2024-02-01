if (data == undefined){
    data = {};
}

// This is our collection of dataBind functionality:
let dataBind = function(){}; 

// Using the .get command to retrieve the value associated with a specified key:
dataBind.get = function(key){
    return data[key]; 
};

// Attaching another function to the one above which adds the input data to the empty array:
dataBind.set = function(key, value){
    data[key] = value;
};

// dataBind.display = function(){
//     document.querySelectorAll('[name], [data]').forEach(function(item){

//         let key = item.name;
//         if(key == undefined){
//             key = item.getAttribute("data");
//         } 
        
//         else{
//             item.value = data[item.name];
//         }
     
//     });
// }; 

dataBind.display = function(){
    document.querySelectorAll('[name], [data]').forEach(function(item){
        if(item.name == undefined){
            let key = item.getAttribute("data");
            if(data[key] !== undefined){
                item.innerText = data[key];
            }
        }
        else{
            let key = item.name;
            if(data[key] !== undefined){
                item.value = data[key];
            }
        }
    }); 
}

dataBind.save = function(){
    console.log(JSON.stringify(data));
    sessionStorage.setItem('data', JSON.stringify(data));
    // Using the .set('data') means that we avoid conflicts if data appears elsewhere.
};

dataBind.display();

document.addEventListener("input", function(e){
    // console.log(e.target.name)

    dataBind.set(e.target.name, e.target.value);
    dataBind.display()
});

// document.querySelector('form').addEventListener("input", function(e){
//     console.log(e.target.name)

//     dataBind.set(e.target.name, e.target.value);

// });