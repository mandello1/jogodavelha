// Aguarda o HTML carregar para inciar a função
// Cria um array com todos os itens de class square
// Para todo elemento do array squares, uma vez ocorrendo o click, executar-se-a a função handleClick

var gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        document.addEventListener("click", handleClick)
    }  )
})

//inicia com uma variável square, que é igual ao elemento alvo do evento click
// cria uma variável position que é igual ao id do square
//usa-se a função movimento e, por fim, atualiza o html
function handleClick(event){
    let square = event.target;
    let position = square.id;
    movimento(position);
    updateSquare();
   gameOver = isover();

   setTimeout( () =>{
    if (gameOver == true){
        let winner = 1
        
        if (player == 1){
            winner = 2;
        } else{
            winner = 1;
        }
        
        alert("Game Over! Player " + winner + " won!");
        return;
    }
}, 10)};

//serve para atualizar o html e mostrar as imagens
//cria um array square com todos os elemento de classe square
// para cada square, tem-se a positin e o symbol
// symbol será igual ao elemento do array modificado pela função movimento()
// se esse elemento do array não estiver vazio, irá se atualizaro HTML para o symbolo equivalente
function updateSquare(){
    let squares = document.querySelectorAll(".square");
   
    squares.forEach((square) =>{
        let position = square.id;
        let symbol = board[position];

        square.innerHTML = `<div class='${symbol}'><div>`;
    }  )
    playertext.innerHTML =`<h3>Turno do Player ${player}</h3>`;
}