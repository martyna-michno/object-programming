class Player {

    constructor(x, y) {

        this._x = x;
        this._y = y;
    }

   get x() {

        return this._x;

    }
    get y() {

        return this._y;
    }

    left(){

        this._x -= 10;
    }
}
// klasa render do wspolpracy z DOMEM

class Render{

    // zeby sie pojawil obiekt tam gdzie go zaicnicjalizuje
    // dostaje playera, miejsce, gdzie ma sie renderowac

    static RenderPlayer(PlayerObject, PlaceToRender){

    PlaceToRender.style.left = PlayerObject.x + 'px';
    PlaceToRender.style.top = PlayerObject.y + 'px';
    
    }

static KeyboardSupport(event, PlayerObject){
switch(event.code){
case 'ArrowLeft':
        console.log('left');
PlayerObject.left();
Render.RenderPlayer(PlayerObject, domBoxPlayer);

}
}
}
const domBoxPlayer = document.querySelector('.counter');
const boxPlayer = new Player(200, 200);

Render.RenderPlayer(boxPlayer, domBoxPlayer);
document.addEventListener('keydown',(event) => Render.KeyboardSupport(event, boxPlayer));

