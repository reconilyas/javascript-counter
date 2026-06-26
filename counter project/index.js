const increaseBTN = document.getElementById("increaseBTN")
const decreaseBTN = document.getElementById("decreaseBTN")
const resetBTN = document.getElementById("resetBTN")
const countLable= document.getElementById("countLable")
let count = 0;


function updateColor(){
         if( count > 0 ){
            countLable.style.color = 'green'
        }
        else if (count < 0 ){
            countLable.style.color = 'red'
        }
        else 
        countLable.style.color = 'blue'
}

increaseBTN.onclick = function(){
         count++;
        countLable.textContent = count;
        updateColor();

}
decreaseBTN .onclick = function(){
         count--;
        countLable.textContent = count;
        updateColor();

}
resetBTN.onclick = function(){
         count = 0;
        countLable.textContent = count;
        updateColor();

}

