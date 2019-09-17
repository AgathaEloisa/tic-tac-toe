// Imprimir números del 1 al 100
// Todo número divisibles por 3 será cambiado por la palabra 'Fizz'
// Todo número divisibles por 5 será cambiado por la palabra 'Buzz'
// Para números mdivisbles por ambos será cambiado por la palabra 'FizzBuzz'
let num = 1;
while(num <= 100){
    console.log(num++);
    if(num % 3 === 0 && num % 5 === 0){
        console.log('FizzBuzz');
    } else if (num % 5 === 0){
        console.log('Buzz');
    } else if(num % 3 === 0){
        console.log('Fizz');
    }
}

// for(let num = 1; num <= 100; num++){
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log('FizzBuzz');
//     } else if (num % 5 === 0){
//         console.log('Buzz')
//     }else if(num % 3 === 0){
//         console.log('Fizz')
//     } else {
//         console.log(num)
//     }   
// }