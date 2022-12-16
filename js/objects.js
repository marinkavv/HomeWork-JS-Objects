// 1. Створити об'єкт customer, що містить такі властивості:
// ім'я,
// прізвище,
// електронна адреса,
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;

const customer = {
  firstName: "Vorobiei",
  lastName: "Marina",
  email: "v.mm.arinka.v@gmail.com",
  password: "qwerty",
  phoneNumber: 380973244575,
  adress: {
    city: "Zaporizhzhia",
    street: "Franka",
    house: 75,
    flat: 86,
  },
  // методи:
  // виведення адреси,
  // зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
  outputAdress: function () {
    return this.adress;
  },
  changePhoneNumber: function (newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  },
};

console.log("customer :>> ", customer.outputAdress());
customer.changePhoneNumber("3809733342846");
console.log("customer :>> ", customer);

// Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
customer.isMale = false;

// Видалити у об'єкта властивість адреса.
delete customer.adress;

// Зробити копії об'єкту customer двома різними способами.

// Спосіб 1:
const customerCopy1 = Object.assign({}, customer);
console.log("customerCopy :>> ", customerCopy1);

// Спосіб 2:
const customerCopy2 = { ...customer };
console.log("customerCopy2 :>> ", customerCopy2);

// 2. Перебрати і вивести властивості об'єкту cat
// {
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
  console.log(`Cat ${key} = ${cat[key]}`);
}

// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор,
// назва,
// рік видання,
// видавництво (рядок або *об'єкт з властивостями місто, назва),
// ціна.
//    Передбачити методи:
// для обчислення віку книги (у роках),
// для зміни ціни книги.

function Book(author, nameBook, yearPublishing, publishingOffice, price) {
  this.author = author;
  this.nameBook = nameBook;
  this.yearPublishing = yearPublishing;
  this.publishingOffice = publishingOffice;
  this.price = price;
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}

const books = new Book(
  "J. K. Rowling",
  "Harry Potter",
  1997,
  "Bloomsbury",
  400
);

books.changePrice(300);
console.log("books2 :>> ", books);
