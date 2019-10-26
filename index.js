console.log('Hello World!')

var student1_proba = {
    name: "Martyna",
    adress: "Sloneczna 12/4",
    studentIdNumber: "281038",
    profile: "Material Engineering",
    displayFullInfo: function () {

        // console.log('Imię ' + this.name + 'Adres ' + this.adress + 'Profil ' + this.studentIdNumber + 'Profil ' + this.profile);
        console.log(`Imię: ${this.name} Adres: ${this.adress}`);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument.toString();

    }

}

var student2_proba = {
    name: "Jagoda",
    adress: "Wielkokacka 13/4",
    studentIdNumber: "950707",
    profile: "Law",
    displayFullInfo: function () {

        console.log(this.name, this.adress, this.studentIdNumber, this.profile);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument.toString();

    }

}

// object literal

// var studentsList = [];

// var student = {
//     name: '',
//     adress: '',
//     studentIdNumber: '',
//     profile: '',
//     setData: function (name, adress, IdNumber, profile) {

//         this.name = name;
//         this.adress = adress;
//         this.studentIdNumber = IdNumber.toString();
//         this.profile = profile;

//     },
//     displayFullInfo: function () {


//         console.log(`Imię: ${this.name} Adres: ${this.adress} NumerId: ${this.studentIdNumber} Profil: ${this.profile}`);

//     },
//     ChangeId: function (newId) {

//         this.studentIdNumber = newId.toString();

//     }

// }

// var student1 = Object.create(student);
// student1.setData("Marek", "Gdańsk", 2930, "Prawo");

// var student2 = Object.create(student);
// student2.setData("Ania", "Gdynia", 4590, "Medycyna");

// var student3 = Object.create(student);
// student3.setData("Joanna", "Warszawa", 3499, "Weterynaria");

// var student4 = Object.create(student);
// student4.setData("Martyna", "Sopot", 1240, "Filologia polska");

// var student5 = Object.create(student);
// student5.setData("Michał", "Wrocław", 9732, "Ekonomia");

// studentsList.push(student1, student2, student3, student4, student5);

// dodawanie danych do html'a

var o_cont = document.querySelector('#display');

var o_html = '';

studentsList.map((element) => {

o_html+=`<div><div>${element.name}</div><div>${element.adress}</div> <div>${element.studentIdNumber}</div> <div>${element.profile} </div></div>`;

});

o_cont.innerHTML = o_html;


//construction function

// function student(name, adress, id, profile) {
//     this.name = name;
//     this.adress = adress;
//     this.studentIdNumber = id;
//     this.profile = profile;
//     this.displayFullInfo = function () {


//         console.log(`Imię: ${name} Adres: ${adress} NumerId: ${id} Profil: ${profile}`);

//     },
//     this.ChangeId = function (newId) {

//         this.studentIdNumber = newId.toString();

//     }

// }


// var studentsList = [

// new student ('Martyna', 'Gdynia', '3892', "Inżynieria materiałowa"),
// new student ('Ania', 'Gdańsk', '2342', 'Medycyna'),
// new student ('Marta', 'Sopot', '9201', 'Kosmetologia')

// ];

// console.log(studentsList);
// console.log(studentsList[1].displayFullInfo());
// console.log(studentsList[2].ChangeId(5555));


//zmiana funkcji w poprzednim przypadku:
// this.ChangeId = function (newId) {

//     this.studentIdNumber = newId.toString();

// }
// byloby problematyczne, bo obiekty, juz utworzone na podstawie tego wczesniejszego juz sie nie zmienia
//dopiero te nowe sie zmienia, jak to zmienie, wiec lepiej zrobic z prototype.



//klasa osoba

function Person (name, adress, id) {
    this.name = name;
    this.adress = adress;
    this.id = id.toString();

}

Person.prototype.displayFullInfo = function (){

    console.log('Imię: ' + this.name + ' Adres: ' + this.adress + 'Id: ' + this.id);

}

Person.prototype.ChangeId = function(newId) {

    this.id = newId.toString();

}

//klasa student

function Student(name, adress, id){

Person.call(this, name, adress, id);
this.role = "student"

}

//klasa nauczyciel

function Teacher(name, adress, id){

Person.call(this, name, adress, id);
this.role = "teacher"

}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//konstruktorem jest student a nie person!

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


var students = [
new Student("Kamila", "Gdansk", 2302),
new Student("Ania", "Gdynia", 3445)
]

var teachers = [
new Teacher("Andrzej", "Warszawa", 3403),
new Teacher("Tomek", "Kraków", 6421)
]