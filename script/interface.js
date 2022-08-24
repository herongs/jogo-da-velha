function handleClick(event){

    console.log(event.target);
}


document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        squares.addEventListener('click',handleClick);

    })

})

