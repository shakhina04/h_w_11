// let names = ['Alex', 'Jane', 'Boba', 'Gustavo']

// for(let item of names) {
//     item
// }

// for(let element of names) {
//     element = element.replace(/a/gi,'')
//     console.log(element);
// }


// let ask = prompt('hello')

// if(ask == 'hello') {
//     let age = 20
//     console.log(age );
// } else{
//     alert('hello')
// }


// let ages = [19,14,15,17,18,21,19,10,]
// console.log(ages.includes(15,4));

// console.log(ages.lastIndexOf(19));  
// console.log(ages.indexOf(12));  // в консоли укажет порядковый номер числа // если indexof не находит число, то выдает "-1"

// for(let item of ages) {
//     if((item % 2) == 0) {
//         console.log(item);
//     } else{
//         console.error(item);
//     }
// }


// Задание

// let names = ['Alex', 'Jane', 'Bob', 'Gustavo',"George", "Fred","Richard"]
// console.log(names);

// let ask_name  = prompt('введите жертву') 

// names.splice(names.indexOf(ask_name), 1)      // 1 - способ

// console.log(names);

// for(let item of names){
//     if(item == ask_name) {
//         names.splice(names.indexOf(item),1);
//     }
// } 
// else {
//     console.log('нет такого имени');
// }


// let item = 0
// for( let index = 0; index <= 100; index +=2) {
//     console.log(index); // подсчет цифр 0 2 4 6 ... 100
//     iter +=1
//     console.log(iter); // подсчет действий итераций 0 1 2 3 ... 51
// }





//Self-repeat (if, else)

// let person;
// if (confirm('R u sure?')) {
//     person = prompt("Hi, what's your name?")
//     alert("Hello," + person)
// } else {
//     alert("person no sure")
// }


// let year = prompt('What year is it now?', '');
// if (year < 2015)   {                                // "!=" не равно
// alert('early'); 
// }
// else if(year > 2015) {
//     alert('late');  
// }   
// else {
//     alert('Thats it')
// }    


// let year;
// let age = prompt('How old r u?', '');
// if(age >18) {
//     year =true;
// }
// else {
//     year =false;
// }
// alert(year);


// let company = prompt('Which company created JS?');
// (company == 'Netscape') ? // "?" - То у нас будет 
//  alert('true') : alert('false');   // ":" - если нет то



//Self-repeat (while, for)

//1) let i = 0;
// while(i<3){
//     alert(i);
//     i++;  // если бь не было   "i++;" то цикл бы повторялся вечно   
//           // повторение цикла по научному называется "итерация" // в нашем случае тут 3 итерации
// }

//2) let i = 0;
// do{
// alert(i);
// i++;
// }
// while(i<3);

// let i;
// for(i=0; i<3; i++) {
//     alert(i);
// }
// // можно записать и так:
// // for(let i=0; i<3; i++) 


// let sum = 0;
// while(true) {
//     let value =+prompt("Введите число", '');
//     if(!value) break;
//     sum+=value;
// }
// alert('Сумма' +sum);


//1) for(let i = 0; i<10; i++) {
//     if ( i % 2 == 0) continue; // этот вариант лучше
//     alert(i);
// }

//2) for(let i = 0; i<10; i++) { // чем этот
//     if ( i%2 ) {
//         alert(i);
//     }
// }

// Подведем итоги: 
// JS поддерживает 3 вида циклов: 
// while - проверяет условие перед каждым выполнением,  
// do while - проверяет условие после каждого выполнения,
// for - проверка условия перед каждым выполнением а также доп.настройки 



//Self-repeat (Массивы)

// let arr = ["Хлеб", "Чай", "Сахар", "Конфеты"];
// arr[2] = 'Груша'; // заменили "Чай" на 'Груша'
// arr[4] = 'Лимон'; // добавили новый элемент
// // alert(arr.length); // выведет кол-во элементов в нашем массиве
// // alert(arr[4]); // выводит "Хлеб"
// alert(arr);

// let arr = [1, "Чай", "Сахар" ];
// // arr.pop(); // удаляет последний элемент
// // arr.push("Конфеты"); // добавляет новый элемент в конце
// arr.shift(); // удаляет из массива первый элемент и также возвращает его
// arr.unshift('Яблоки'); // добавляет новый элемент в начало
// alert(arr);




// // H/T

// 1. Отфильтровать массив машин закинуть в переменную cheap только те машины у которых цена меньше 35 тысяч.
//P.s обьект внутри которого будет name и price и color. Машин должно быть 7. каждая машина в массиве это обьект, 7 обьектов.

// let arr = [
//     {
//         name: "BMW",
//         color: "red",
//         price: 40000,
//     },
//     {
//         name: "Bugatti",
//         color: "orange",
//         price: 70000,
//     },
//     {
//         name: "Ferrari",
//         color: "yellow",
//         price: 200000,
//     },
//     {
//         name: "Lamborgini",
//         color: "green",
//         price: 35000,
//     },
//     {
//         name: "Hyundai",
//         color: "blue",
//         price: 30000,

//     },
//     {
//         name: "Jeep",
//         color: "indigo",
//         price: 20000,
//     },
//     {
//         name: "Mercedes",
//         color: "violet",
//         price: 100000,
//     }


// ]
// console.log(arr);

// let cheap = 
// arr.filter(function (e) {
//     return e.price < 35000;
// });
// console.log(cheap);









// 2.
// let index = prompt('Введите имя из списка')
// let arr = ['Aleksey',  'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
// *В переменной индекс я пишу любое число функция должна сравнить это число с индексом элементов из arr, Если какой нибудь из них совпадает то удалить этот элемент из массива Если нет то сообщить что такого элемента у нас нет*
// P.s При написании имени или цифры имя должно удалиться, начинается отсчет не от 0 а от 1.


// const arr = [ 'Aleksey',  'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
// let index = prompt('Введите имя из списка')
// console.log(arr);
// console.log(index);

// // // arr.splice(arr.indexOf(index), 1)
// // // console.log(arr);

// for(const item of arr){
//     if(arr.indexOf(item) == index || arr.indexOf(item) == arr.length ){
//         arr.splice(arr.indexOf(item), +1)
//     }
//     else {
//         console.log('нет такого имени');
//     }
// }
// console.log(arr);












// 3. 
// Если массив включает в себя больше 5-ти элемента типа 'number' то показать в… консоли гуд
// (нужно будет проверить на тип данных т.е через циклы for, if нужно проверить на тип данных)


// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
// console.log(arr);

// for(let item of arr) {
//     if (arr.filter(Number).length <= 5) {
//         console.log('enough');
//     } else {
//         console.log('much');
//     }
//     console.log(arr);

// }




// 4. 
// Раскидать людей в разные массивы в зависимости от их почты
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
let emails = {
    org: [],
    net: [],
    info: []
}
let other = []


users.map(item =>{
    let email = item.email .split('.').at(-1)

    if (emails[email]) {
        emails[email].push(item)
    } else {
        other.push(item)
    } 
}) 

console.log(emails); 























