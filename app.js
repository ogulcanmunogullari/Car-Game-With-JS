let whiteCar = document.querySelector("#whiteCar");
let blackCar = document.querySelector("#blackCar");

function add(){
    
    function duration(){
        var randomNumber = Math.floor(Math.random()*2+1);
        return randomNumber;
    }
    let transitionDurationBlack = duration()
    let transitionDurationWhite = duration()

    if(transitionDurationWhite > transitionDurationBlack)
        {
            whiteCar.classList.add("car-white-win");
            blackCar.classList.add('car-black-lose');
            document.querySelector('#winner').innerHTML=`You Lose!`;
        }else if(transitionDurationWhite < transitionDurationBlack)
        {
            whiteCar.classList.add("car-white-lose");
            blackCar.classList.add('car-black-win');
            document.querySelector('#winner').innerHTML=`You Win!`;
        }else
        {
            add();
        }
}

function deleted(){
    whiteCar.classList.remove("car-white-lose");
    blackCar.classList.remove('car-black-win');
    whiteCar.classList.remove("car-white-win");
    blackCar.classList.remove('car-black-lose');
    document.querySelector('#winner').innerHTML=``;
}