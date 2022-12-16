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
