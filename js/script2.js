"use strict"

// if(4==9){
//     console.log('OK!');
// }else{
//     console.log('Error');
// }



// if(num < 49) {
//     console.log('Error');
// } else  if (num > 100){
//     console.log('Mnogo');
// }else{
//     console.log('Ok');
// }

// (num == 50) ? console.log('OK') : console.log('Error');

let num = 50;

// switch(num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100: 
//         console.log('Wrong');
//         break;
//     case 51:
//         console.log('Good');
//         break; 
//     default:
//         console.log('Не в этот раз');
//         break; }
// while(num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while(num <55);

for (let i= 1; i < 10; i++){
    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}