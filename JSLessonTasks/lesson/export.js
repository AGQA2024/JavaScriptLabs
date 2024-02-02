// Looking at classes:

// Create an object that you want to modify~
let object = {
    "stuff": [1,2,3,4,5,6,7,8],
    "action": function(){
        alert(123); 
    },

    "OtherObject": {
        "A": "1", 
        "B": "2",
        "C": "3",
        "NestedObject": {
            "E": "4", 
            "F": "5",
            "G": "6"}
        }
}

// Modify the object in some way:
object.more = 123; 

// Simpliest way to export:
export default object ; 