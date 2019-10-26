class Person {
    constructor(name, adress, id, age) {

        this.name = name;
        this.adress = adress;
        this.id = id.toString();
        this.age = age.toString();

    }

    //metoda jest dostepna w klasie, wiec jak dziedziczy to razem z metoda 
    // mimo ze nie jest w konstruktorze, to nie ma to znaczenia - jest w klasie!
    // metody robię poza konstruktorem!

    changeId(newId) {

        this.id = newId.toString();

    }

    displayFullInfo() {

        console.log(`Imię: ${this.name} Adres: ${this.adress} Id: ${this.id} Wiek: ${this.age} Rola: ${this.role}`);

    }

}

class Student extends Person {
    constructor(name, adress, id, age) {

        super(name, adress, id, age);
        this.role = 'student';

    }

}

class Teacher extends Person {
    constructor(name, adress, id, age) {

        super(name, adress, id, age);
        this.role = 'nauczyciel';

    }

}


const StudentsArray = [
    new Student("Kamila", "Gdansk", 2302, 21),
    new Student("Ania", "Gdynia", 3445, 22),
    new Student("Jagoda", "Sopot", 2125, 23),
    new Student("Martyna", "Wejherowo", 9885, 20),
]


const TeachersArray = [
    new Teacher("Andrzej", "Warszawa", 3403, 34),
    new Teacher("Tomek", "Kraków", 6421, 45),
    new Teacher("Michał", "Wrocław", 9821, 29),
    new Teacher("Maciek", "Poznań", 4421, 35)
]




class Render {

    static renderText(arrayType, nameOfDiv) {

        const object_cont = document.querySelector(nameOfDiv);
        let object_html = '';
        arrayType.map((element) => {
            object_html += `<div><div>${element.name}</div><div>${element.adress}</div><div>${element.id}</div><div>${element.age}</div><div>${element.role}</div><div>${element.displayFullInfo()}</div></div>`;
        });

        object_cont.innerHTML = object_html;
    }
}

Render.renderText(StudentsArray, '#students');
Render.renderText(TeachersArray, '#teachers');
 













































// let inputName = document.querySelector('#inputName');
// let inputCity = document.querySelector('#inputCity');
// let inputId = document.querySelector('#inputId');
// let inputAge = document.querySelector('#inputAge');
// let inputRole = document.querySelector('#inputRole');
// let button = document.querySelector("#addButton");

// let Name = inputName.value;
// let City = inputCity.value;
// let Id = inputId.value;
// let Age = inputAge.value;
// let Role = inputRole.value;


// let studentsContainer = document.querySelector(".students");
// let teachersContainer = document.querySelector(".teachers");

// button.onclick = function(){

// if(Role === "nauczyciel"){

// const nauczyciel = document.createElement('div');
// nauczyciel.innerHTML = "blablabalabala"
// teachersContainer.appendChild(nauczyciel);


// }

// if(Role === "student")

// const student = document.createElement('div');
// student.innerHTML = "blablabalabala"
// studentsContainer.appendChild(student);

// }