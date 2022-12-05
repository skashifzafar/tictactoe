function gameboard(){
    
    const reset=()=>{
        board=[['','',''],['','',''],['','','']]
        start=false
        val=''
        make_board()
        const win=document.querySelector('#win_dec')
        win.innerHTML=''
    }
    const turn=(ident,x,y)=>{
        if(start==false){
            val=ident
            start=true
            const turn=document.getElementById('sym').value;
            const p1_div=document.querySelector('#p1')
            const p2_div=document.querySelector('#p2')
            p1_div.innerHTML='Symbol for Player 1: '+p1.value;
            if(turn=='p1'){
                p1_div.innerHTML='Symbol for Player 1: X';
                p2_div.innerHTML='Symbol for Player 2: O';
            }
            else{
                p1_div.innerHTML='Symbol for Player 1: O';
                p2_div.innerHTML='Symbol for Player 2: X';
            }
        }
        console.log(x,y)
        if (board[x][y] ==''){
            board[x][y]=val
            if (val=='X'){
                val='O'
            }
            else{
                val='X'
            }
        }
        else{
            console.log('Invalid')
            return false
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
            console.log('Done ', row)
            return row
        }
        if(col_set){
            console.log('Done ', col)
            return col
        }   
        }
        return true
    }
    const make_board=()=>{
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                const cell=document.getElementById(i+''+j);
                cell.innerHTML=board[i][j] 
            }
        }
    }
    var board =[['','',''],['','',''],['','','']]
    var start=false
    var val=''
    return{turn,reset}
}
const buttonPressed = e => {
    console.log(e.target.id);  // Get ID of Clicked Element
    var id_ref=e.target.id;
    var id_ref1=id_ref.split('');
    console.log(id_ref,id_ref1);
    const turn=document.getElementById('sym').value;
    const ply=document.getElementById('ply').value;
    var sym=''
    if(turn=='p1'){
        if (ply=='p1'){
            sym='X'
        }
        else{
            sym='O'
        }
    }
    else{
        if (ply=='p1'){
            sym='O'
        }
        else{
            sym='X'
        }
    }
    console.log(sym,turn,ply)
    var ret_game=board1.turn(sym,id_ref1[0],id_ref1[1]);
    if (ret_game==false){
        return
    }
    
    if (ret_game=='X'||ret_game=='O'){
        const win=document.querySelector('#win_dec')
        win.innerHTML='Game is won by: '+ret_game
        console.log('Game is won by: '+ret_game)
    }
    }
//Instantiate the game
const board1=gameboard()
//Create header

const head_div=document.querySelector('.header')
const sel_div=document.createElement('div')
sel_div.id='sel_div'
const sym_div=document.createElement('label')
sym_div.classList='sym_div'
const sym=document.createElement('label')
sym.for='sym';
sym.innerHTML='X:'
const sel_sym=document.createElement('select')
sel_sym.name='sym'
sel_sym.id='sym'
const sym_x=document.createElement('option')
sym_x.value='p1'
sym_x.innerHTML='Player 1'
const sym_o=document.createElement('option')
sym_o.value='p2'
sym_o.innerHTML='Player 2'
sel_sym.appendChild(sym_x)
sel_sym.appendChild(sym_o)
sym_div.appendChild(sym)
sym_div.appendChild(sel_sym)
sel_div.appendChild(sym_div)

const ply_div=document.createElement('label')
ply_div.classList='ply_div'
const ply=document.createElement('label')
ply.for='ply';
ply.innerHTML='First turn:'
const sel_ply=document.createElement('select')
sel_ply.name='ply'
sel_ply.id='ply'
const ply_1=document.createElement('option')
ply_1.value='p1'
ply_1.innerHTML='Player 1'
const ply_2=document.createElement('option')
ply_2.value='p2'
ply_2.innerHTML='Player 2'
sel_ply.appendChild(ply_1)
sel_ply.appendChild(ply_2)
ply_div.appendChild(ply)
ply_div.appendChild(sel_ply)
sel_div.appendChild(ply_div)
head_div.appendChild(sel_div)
const plr_div=document.createElement('div')
plr_div.classList='player'
const p1_div=document.createElement('div')
p1_div.id='p1'
const p2_div=document.createElement('div')
p2_div.id='p2'
plr_div.appendChild(p1_div)
plr_div.appendChild(p2_div)
head_div.appendChild(plr_div)
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
ref_cell=document.querySelectorAll('.cell')
const len=ref_cell.length
console.log(len)
for(var i=0;i<len;i++){
    ref_cell[i].addEventListener("click", buttonPressed)
    //ref_cell.addEventListener('click', function(){board1.turn('X',i,j)})
    }

const foot=document.querySelector('.foot')
const win_dec=document.createElement('div')
win_dec.id='win_dec'
foot.appendChild(win_dec)
const reset=document.createElement('button')
reset.id='rst'
reset.innerHTML='Reset'
foot.appendChild(reset)
reset.addEventListener('click',function(){board1.reset()})


