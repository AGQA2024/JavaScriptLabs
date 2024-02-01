// This is an example of what might be a legacy check to avoid errors arising:
if(data == undefined){
    data = {};
} 


let dataBind = function(){

}
dataBind.get = function(key){

    // console.log(key)
    // //Adding getters to the dataBind.display function means that we can add parsing functionality:
    let field = data;
    key.split(".").forEach(function(item){
        // console.log(field) 
        field=field[item]});
        
    return field;

    // return data[key];
}

dataBind.set = function(key,value){
    data[key] = value;
}

dataBind.display = function(){
    document.querySelectorAll('[name], [data]').forEach(function(item){
        if(item.name == undefined){
            let key = item.getAttribute("data");
            if(dataBind.get(key) !== undefined){
                item.innerText = dataBind.get(key);
            }
            // if(data[key] !== undefined){
            //     item.innerText= data[key];
            // }
        }
        else{
            let key = item.name;
            if(dataBind.get(key) !== undefined){
                item.value = dataBind.get(key);
            }
            // if(data[key] !== undefined){
            //     item.value = data[key]
            // }
        }
    }); 
}


dataBind.save = function(){
    console.log( JSON.stringify(data)  )
    sessionStorage.setItem('data', JSON.stringify(data) );
}


//This is the important bit we want to overwrite with our new fetched data:
dataBind.display();

document.addEventListener("input", function(e){
    dataBind.set(e.target.name, e.target.value);
    dataBind.display();
})