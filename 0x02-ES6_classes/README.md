complex

export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

export class StudentALX {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this.alxClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._alxClass.year} - ${self._alxClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
Result:

bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentALX {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'John',
    _lastName: 'Doe',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 9-hoisting.js
10. Vroom
mandatory
Implement a class named Car:

Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6

bob@dylan:~$ cat 10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 10-car.js
11. EVCar
#advanced
Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

Constructor attributes:
brand (String)
motor (String)
color (String)
range (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
bob@dylan:~$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 100-evcar.js

