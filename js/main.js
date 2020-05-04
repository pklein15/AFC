console.log('Hello World!')

const cards = document.querySelectorAll('.mem_card');
const buttons = document.querySelectorAll('.btn');

// const levels = [ {
//     "level": "Corporate I",
//     "price": "300.00"
// }, {
//     "level": "Corporate I",
//     "price": "300.00"

// }]

let data = [
    {'level': 'Student', 'price' : '50.00', 'image' : '/src/croissant-and-coffee.jpg'},
    {'level': 'Family', 'price' : '75.00', 'image' : '/src/street.jpg'},
    {'level': 'Sponsor', 'price' : '90.00', 'image' : '/src/bridge.jpg'},
    {'level': 'Corporate - Level 1', 'price' : '175.00', 'image' : '/src/fountain.jpg'},
    {'level': 'Corporate - Level 2', 'price' : '275.00', 'image' : '/src/cheese-tray-1433504_1920.jpg'},
    {'level': 'Corporate - Level 3', 'price' : '500.00', 'image' : '/src/building.jpg'},
];

for (i= 0;i < 6; i++){
    console.log(i);
    buttons[i].addEventListener('click', (e) => {
        sessionStorage.setItem("level" , JSON.stringify(data[i]));
    });
}


buttons[0].addEventListener('click', (e) => {
    sessionStorage.setItem("level" , JSON.stringify(data[0]));
});

// buttons[1].addEventListener('click', (e) => {
//         sessionStorage.setItem("level" , JSON.stringify(data[1]));
//         let t = JSON.parse(sessionStorage.getItem("level"));
//         console.log(t.price)
// });

// buttons[2].addEventListener('click', (e) => {
//     sessionStorage.setItem("level" , JSON.stringify(data[2]));
//     let t = JSON.parse(sessionStorage.getItem("level"));
//     console.log(t.price)
// });

// buttons[3].addEventListener('click', (e) => {
//     sessionStorage.setItem("level" , JSON.stringify(data[3]));
//     let t = JSON.parse(sessionStorage.getItem("level"));
//     console.log(t.price)
// });

// buttons[4].addEventListener('click', (e) => {
//     sessionStorage.setItem("level" , JSON.stringify(data[4]));
//     let t = JSON.parse(sessionStorage.getItem("level"));
//     console.log(t.price)
// });

// buttons[5].addEventListener('click', (e) => {
//     sessionStorage.setItem("level" , JSON.stringify(data[5]));
//     let t = JSON.parse(sessionStorage.getItem("level"));
//     console.log(t.price)
// });


// console.log(sessionStorage.getItem("price"));
