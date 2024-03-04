let button=document.querySelectorAll(".btn");
let newgame=[['t','i','c'],['t','a','c'],['t','l','e']];
let game=[['t','i','c'],['t','a','c'],['t','l','e']];
let counter=0;
let used=0;
let val='X';
let row,column;
let l,r;
let flag=false;
let intro=document.querySelector(".intro");
intro.addEventListener('click',function(event){
    intro.innerHTML="Player 1's turn with X";
})
console.log(button[0]);
let arr=Array.from(button);
console.log(arr.length);
for(let i=0;i<arr.length;i++)
{
    button[i].addEventListener('click',function(evt){
        let audio=new Audio("./click.wav");
        audio.play();
        counter++;
        console.log(button[i].name);
        switch(button[i].name)
        {
            case '00':
                row=0;
                column=0;
                break;
            case '01':
                row=0;
                column=1;
                break;
            case '02':
                row=0;
                column=2;
                break;
            case '10':
                row=1;
                column=0;
                break;
            case '11':
                row=1;
                column=1;
                break;
            case '12':
                row=1;
                column=2;
                break;
            case '20':
                row=2;
                column=0;
                break;
            case '21':
                row=2;
                column=1;
                break;
            case '22':
                row=2;
                column=2;
                break;
        }
        if(counter==1)
        {
            button[i].innerHTML=val;
            game[row][column]=val;
            used++;
        }
        else if(counter>1)
        {
            if(button[i].innerHTML!="X"&&button[i].innerHTML!="O")
            {
                if(val=='X')
                {
                    button[i].innerHTML="O";
                    val='O';
                    game[row][column]=val;
                    used++;
                }
                else if(val=='O')
                {
                    button[i].innerHTML="X";
                    val='X';
                    game[row][column]=val;
                    used++;
                }
            }
        }
        console.log(game);
        let currval=game[row][column];
        for(r=0;r<3;r++)
        {
            if(game[r][column]!=currval)
                break;
        }
        r--;
        if(r==2)
            flag=true;
        if(!flag)
        {
            for(l=0;l<3;l++)
            {
                if(game[row][l]!=currval)
                    break;
            }
            l--;
            if(l==2)
                flag=true;
        }
        if(!flag)
        {
            let check=game[0][0];
            for(r=0;r<3;r++)
            {
                if(game[r][r]!=check)
                    break;
            }
            r--;
            if(r==2)
            {
                flag=true;
            }
            if(!flag)
            {
                check=game[0][2];
                r=0;
                l=2;
                while(r<3)
                {
                    if(game[r][l]!=check)
                        break;
                    r++;
                    l--;
                }
                r--;
                if(r==2)
                    flag=true;
            }
        }
        if(flag)
        {
            let audio=new Audio("./win.wav");
            audio.play();
            console.log("game over "+val+" wins");
            if(val=='X')
                intro.innerHTML="Congratulations! Player 1 wins X";
            else
                intro.innerHTML="Congratulations! Player 2 wins O";
        }
        else
        {
            if(used==9)
            {
                let audio=new Audio("./loss.wav");
                audio.play();
                console.log("Neither wins its a draw");
                intro.innerHTML="Sorry! its a Draw";
            }
            else
            {
                if (used%2!=0)
                {
                    intro.innerHTML="Player 2's turn with O";
                }
                else
                {
                    intro.innerHTML="Player 1's turn with X";
                }
            }
        }
    })
}