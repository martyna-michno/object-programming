class Information {

    constructor(fullName, accountNumber) {

        this._fullName = fullName;
        this._accountNumber = accountNumber;

    }


    get fullName() {

        return this._fullName;

    };

    get accountNumber() {

        //  var part1 = this._accountNumber.slice(0,2);
        //  var part2 = this._accountNumber.slice(22,26);
        //  var stars = "********************";

        //  return part1 + stars + part2;

        return this._accountNumber.replace(this._accountNumber.slice(2, 22), ' **** **** **** **** **** ');

    };


    set accountNumber(newParam) {

        this._accountNumber = newParam;

    };

}



class Render {

    static renderList(listToRender, elementToRender) {

        const element = document.getElementById(elementToRender);

        listToRender.map((currentElement) => {

            // metoda laczenia zmiennych z kawalkami napisow : ``
            
            element.innerHTML += `<div>Imię: ${currentElement.fullName}   || Numer konta: ${currentElement.accountNumber}</div>`

        })
    }
}

var peopleList = [

    new Information("Martyna", '98235462736472837461523049'),
    new Information("Andrzej", '87565432134567897654323456'),
    new Information("Michał", '94839483762384928312634039'),
    new Information("Tomek", '19364758392304859403942232'),
    new Information("Karolina", '47203947629384628374513421'),

];

//uruchomienie poprzez podanie nazwy klasy i parametrow 

Render.renderList(peopleList, 'list');