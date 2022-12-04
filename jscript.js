function gameboard(){
    var board=[['','',''],['','',''],['','','']]
    const turn=(ident,x,y)=>{
        console.log(x,y)
        if (board[x][y] ==''){
            board[x][y]=ident
        }
        else{
            console.log('Invalid')
        }
        console.log(board)
        make_board()
        return board_check()
    }
    const board_check=()=>{
        for (var i=0;i<3;i++){
            let row=board[i][0]
            let col=board[0][i]
            row_set=true
            col_set=true
            for (var j=0;j<3;j++){
                if (row!=''){
                    if (row!=board[i][j]){
                        row_set=false
                    }
                }
                else{
                    row_set=false
                }
                if (col!=''){
                    if (col!=board[j][i]){
                        col_set=false
                    }
                }
                else{
                    col_set=false
                }
            }
        if(row_set){
            return row
        }
        if(col_set){
            return col
        }   
        }
        return ''
    }
    const make_board=()=>{
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                const cell=document.getElementById(i+''+j);
                cell.innerHTML=board[i][j] 
            }
        }
    }
    return{turn}
}
//Instantiate the game
const board1=gameboard()
//Create header

const head_div=document.querySelector('.header')
const sym_div=document.createElement('label')
sym_div.classList='sym_div'
const sym=document.createElement('label')
sym.for='sym';
sym.innerHTML='Choose a symbol for player 1:'
const sel_sym=document.createElement('select')
sel_sym.name='sym'
sel_sym.id='sym'
const sym_x=document.createElement('option')
sym_x.value='X'
sym_x.innerHTML='X'
const sym_o=document.createElement('option')
sym_o.value='O'
sym_o.innerHTML='O'
sel_sym.appendChild(sym_x)
sel_sym.appendChild(sym_o)
sym_div.appendChild(sym)
sym_div.appendChild(sel_sym)
head_div.appendChild(sym_div)
//Create Board
const game=document.querySelector('.game')
const board_div=document.createElement('div')
board_div.classList='board'

for(var i=0;i<3;i++){
    const row=document.createElement('div')
    row.classList='row '+i
    for(var j=0;j<3;j++){
        const cell_div=document.createElement('div')
        cell_div.classList='cell'+' r'+i+' c'+j+' '+i+j
        const cell=document.createElement('div')
        cell.id=i+''+j;
        const p1=document.getElementById('sym')
        //cell.innerHTML='X'
        cell_div.appendChild(cell)
        row.appendChild(cell_div)
    }
    board_div.appendChild(row)
}
game.appendChild(board_div)
const buttonPressed = e => {
    console.log(e.target.className);  // Get ID of Clicked Element
    var class_ref=e.target.className;
    var class_ref1=class_ref.split(' ');
    console.log(class_ref,class_ref1);
    var class_ref2=class_ref1[3].split('');
    const p1=document.getElementById('sym');
    board1.turn(p1.value,class_ref2[0],class_ref2[1]);
    }
ref_cell=document.querySelectorAll('.cell')
const len=ref_cell.length
console.log(len)
for(var i=0;i<len;i++){
    ref_cell[i].addEventListener("click", buttonPressed)
    //ref_cell.addEventListener('click', function(){board1.turn('X',i,j)})
    }

