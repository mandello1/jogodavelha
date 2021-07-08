var board = ['','','','','','','','',''];
var playerTurn = 0;
var symbols = ['x','o'];
var gameOver = false;
var player = playerTurn + 1;

// função recebe o número equivalente à posição à ser alterada
// altera o array board para que contenha um dos symbols no local indicado pela position
// ao fim muda o playerTurn

function movimento(position){

    if(board[position] == ''){
    board[position] = symbols[playerTurn];
    
    if(playerTurn == 0){
        playerTurn = 1;
    } else{
        playerTurn = 0;
    }
    player = playerTurn + 1;
    gameOver= isover();
}}

function isover(){
    
    var result = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(elements in result){
        let seq = result[elements];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] 
            && board[pos2] == board[pos3] 
            && board[pos1] != ''){
            return true;
        }
    }
}