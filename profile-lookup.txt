// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) { 
    
  // Only change code below this line
    for(var i=0; i<contacts.length;i++){ 
        if(contacts[i].firstName === name){
            return contacts[i][prop] || 'No such property';
        }
    } 
    return 'No such contact';
  // Only change code above this line
}
//console.log(contacts[0].firstName);
lookUpProfile("Akira", "likes");

/*for(var n=0; n<contacts.length; n++){
    console.log('hola');
}*/

/*var vencontrada = 'likes';
for(var i=0; i<contacts.length;i++){
    for(var j=0; j<contacts.length; j++){
        if(contacts.likes[j] == vencontrada){
            console.log(contacts[i].likes);
        }
        else{
            console.log('No');
        }
    }
} */