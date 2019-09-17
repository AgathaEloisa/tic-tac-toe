// toddler/ preschooler/ gradeschooler/teenager/young adult/ adult.

let userAge = parseInt(prompt('How old are you?'));
console.log(userAge);

if( userAge < 3 ){
     alert('you are a toddler');
}
else if( userAge >= 3 && userAge <= 5 ){
     alert('you are a preschooler');
}
else if( userAge >= 6 && userAge <= 13 ){
     alert('you are a gradeschooler');
}
else  if( userAge >= 13 && userAge <= 18){
     alert('you are a teenager');
}
else if( userAge >= 18 && userAge <= 30 ){
     alert('you are a young adult');
} else {
         alert('you are an adult person');
}