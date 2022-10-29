let getMove = false;

function checkMove() {
    if (getMove == false) {
        move()
    } else {
        console.log("Is Running!!!!!")
    }
}


function move() {
    getMove = true;
    const element = document.getElementById("myBar");
    width = 0;
    const id1 = setInterval(frame, 10);

    function frame() {
        if (width == 100 && getMove == true) {
            move2()
        } else {
            width++;
            // console.log(width)
            element.style.width = width + '%';
            if (getMove == false) {
                width = 0;
                element.style.width = '0%';

            }
        }
    }
}


function move2() {
    getMove = true;
    const element = document.getElementById("myBar");
    width = 100;
    const id2 = setInterval(frame, 10);

    function frame() {
        if (width == 0 && getMove == true) {
            move()
        } else {
            width--;
            // console.log(width)
            element.style.width = width + '%';
            if (getMove == false) {
                width = 0;
                element.style.width = '0%';
            }
        }
    }
}

function clickmetogetdigit() {
    // console.log(width);
    getMove = false;
    let NumOfBalloon = (width - (width % 10)) / 10;
    console.log(NumOfBalloon);
    alert(`You Get Balloon Number ${NumOfBalloon}`)
    randomBalloon(NumOfBalloon);
    // document.getElementById("digit").append(`${NumOfBalloon}`);
}

function randomBalloon(NumOfBalloon) {
    switch (NumOfBalloon) {
        case 0:
            let Balloon0 = document.getElementById('balloon-0')
            Balloon0.style.backgroundColor = "Blue";
            break;
        case 1:
            let Balloon1 = document.getElementById('balloon-1')
            Balloon1.style.backgroundColor = "Blue";
            break;
        case 2:
            let Balloon2 = document.getElementById('balloon-2')
            Balloon2.style.backgroundColor = "Blue";
            break;
        case 3:
            let Balloon3 = document.getElementById('balloon-3')
            Balloon3.style.backgroundColor = "Blue";
            break;
        case 4:
            let Balloon4 = document.getElementById('balloon-4')
            Balloon4.style.backgroundColor = "Blue";
            break;
        case 5:
            let Balloon5 = document.getElementById('balloon-5')
            Balloon5.style.backgroundColor = "Blue";
            break;
        case 6:
            let Balloon6 = document.getElementById('balloon-6')
            Balloon6.style.backgroundColor = "Blue";
            break;
        case 7:
            let Balloon7 = document.getElementById('balloon-7')
            Balloon7.style.backgroundColor = "Blue";
            break;
        case 8:
            let Balloon8 = document.getElementById('balloon-8')
            Balloon8.style.backgroundColor = "Blue";
            break;
        case 9:
            let Balloon9 = document.getElementById('balloon-9')
            Balloon9.style.backgroundColor = "Blue";
            break;

        default:
            alert('Sorry ,You lost your reward!')
    }
    setTimeout(() => {
        clearAllStyle()
    }, 2000);

}

function clearAllStyle() {
    document.getElementById('balloon-0').style.backgroundColor = "transparent";
    document.getElementById('balloon-1').style.backgroundColor = "transparent";
    document.getElementById('balloon-2').style.backgroundColor = "transparent";
    document.getElementById('balloon-3').style.backgroundColor = "transparent";
    document.getElementById('balloon-4').style.backgroundColor = "transparent";
    document.getElementById('balloon-5').style.backgroundColor = "transparent";
    document.getElementById('balloon-6').style.backgroundColor = "transparent";
    document.getElementById('balloon-7').style.backgroundColor = "transparent";
    document.getElementById('balloon-8').style.backgroundColor = "transparent";
    document.getElementById('balloon-9').style.backgroundColor = "transparent";

}