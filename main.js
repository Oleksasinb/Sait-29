// let a = -4;
// console.log(-a);

// a='1';
// console.log(typeof(a));
// console.log(a);

// let b = +a;
// console.log(b);
// console.log(typeof(b));
// // a=+'1a' NAN

// a = 10;
// b = 3;
// console.log("a%b = ", a%b);

// a = 2; 
// b = 3;
// console.log("2**3 = ", a**b);

// console.log("3**3 = ", 3**3);

// console.log("корень из 144 = ", 144**(1/2));

// console.log("Корень кубический из 27 = ", 27**(1/3));

// a = '25';
// b = 5;

// console.log(a-b);
// console.log(a/b);
// console.log(a*b);

// console.log(a+b) // 525;

// console.log(+a +b) // 25+5=30;

// a = 25;
// console.log('a= ', a);
// a++;
// console.log('New ', a) // +1;
// a--;
// console.log('New ', a) // -1;

// let a = prompt('a=?')
// function pow() {
//     let b = a**2;
//     const block = document.querySelector('.block2')
//     block.innerHTML = `${b}`
// }

let a = prompt('Сторона квадрата?')

function pow() {
    let b = a*4
    const block = document.querySelector('.block2')
    block.innerHTML = `${b}`
}
function zaraza() {
    let c = a**2
    const block = document.querySelector('.block3')
    block.innerHTML = `${c}`
}