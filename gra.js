let container = document.querySelector('.container');
let player = document.querySelector('.counter');

//key = arrowleft, keycode = numerek

document.onkeydown = function (e) {

    let actualPositionX = player.offsetLeft;
    let actualPositionY = player.offsetTop;

    switch (e.key) {
        case 'ArrowLeft':
            console.log('lewo');
            return player.style.left = `${(actualPositionX - 5).toString()}px`;
            break;
        case 'ArrowRight':
            console.log('prawo');
            return player.style.left = `${(actualPositionX + 5).toString()}px`;
            break;
        case 'ArrowUp':
            console.log('góra');
            return player.style.top = `${(actualPositionY - 5).toString()}px`;
            break;
        case 'ArrowDown':
            console.log('dół');
            return player.style.top = `${(actualPositionY + 5).toString()}px`;
            break;
    }
};


// function checkBorders() {
//     if (actualPositionY < 0 ||
//         actualPositionY > container.offsetTop + container.offsetHeight ||
//         actualPositionX < 0 ||
//         actualPositionX > container.offsetWidth + container.offsetLeft
//         ) {
//         alert('Game over!');
//     }
// }

// checkBorders();


