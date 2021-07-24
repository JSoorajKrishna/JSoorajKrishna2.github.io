let w=window.innerWidth;
let h=window.innerHeight;
let high_score;
let current_score=0;
let j=0;
let cs=document.getElementsByClassName("current_score");
let hs=document.getElementsByClassName("high_score");
let pos1;
let ceiling_movement=0;
let game_over_movement=0;
let radius=10;
let obstacle_move=0;
let obstacle_down=0;
let bonus=0;
let cat=false;
let bonus_check=false;
let t=0;

let game_situation=true;
let game_over_condition=false;


for(let i=w;i>=1;i--)
{
	if(w%96==0)
	{
		break;
	}
	w--;
}

h-=250;

for(let i=h;i>=1;i--)
{
	if(h%24==0)
	{
		break;
	}
	h--;
}

let i=0;
let i_fast=1;
let i_dupl=1;
let pos=0;

window.setInterval(draw,1);
window.setInterval(game_over,10);
window.setInterval(bonus_count,7000);

let canvas=document.getElementById("canvas");
canvas.setAttribute("width",w);
canvas.setAttribute("height",h);

let ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.fillRect(0,0,w,h/3);
ctx.fillRect(0,2*h/3,w,h/3);
ctx.fillStyle="blue";
ctx.moveTo(0,2*h/3);
ctx.lineTo(w/28,2*h/3-h/8);
ctx.lineTo(w/16,2*h/3);
ctx.fill();


window.onclick=function()
{
	pos++;
}
window.addEventListener("keydown",e =>
		{
			const keyName = event.key;
			if(keyName==" ")
			{
				pos++;
			}
		})



function draw()
{	
	cs[0].textContent=current_score;
	
	if(game_situation)
	{
		if(i_dupl%120==0)
		current_score++;

		if(i<=w/2)
	{
		ctx.clearRect(i,2*(h/3)-h/8,w/16,h/8);
		ctx.clearRect(i,h/3,w/16,h/8);

				if(pos%2==0)
				{
					i++;
					ctx.fillStyle="blue";
					ctx.beginPath();
					ctx.moveTo(i,2*h/3);
					ctx.lineTo(w/28+i,2*h/3-h/8);
					ctx.lineTo(w/16+i,2*h/3);
					ctx.fill();
				}

				else
				{
					i++;
					ctx.fillStyle="blue";
					ctx.beginPath();
					ctx.moveTo(0+i,h/3);
					ctx.lineTo(w/28+i,h/3+h/8);
					ctx.lineTo(w/16+i,h/3);
					ctx.fill();
				}
	}
	else
	{
		ctx.clearRect(w/2+1,2*(h/3)-h/8,w/16,h/8);
		ctx.clearRect(w/2+1,h/3,w/16,h/8);
				if(pos%2==0)
				{
					ctx.fillStyle="blue";
					if(cat)
					ctx.fillStyle="RoyalBlue";
					ctx.beginPath();
					ctx.moveTo(w/2+1,2*h/3);
					ctx.lineTo(w/28+w/2+1,2*h/3-h/8);
					ctx.lineTo(w/16+w/2+1,2*h/3);
					ctx.fill();
				}

				else
				{
					ctx.fillStyle="blue";
					if(cat)
					ctx.fillStyle="RoyalBlue";
					ctx.beginPath();
					ctx.moveTo(0+w/2+1,h/3);
					ctx.lineTo(w/28+w/2+1,h/3+h/8);
					ctx.lineTo(w/16+w/2+1,h/3);
					ctx.fill();
				}
		
		ctx.clearRect(3*w-bonus+i_fast,h/3+10,2*radius,2*radius);
		ctx.fillStyle="orange";
		if(cat==false)
		ctx.fillRect(3*w-bonus,h/3+10,2*radius,2*radius);
		
		if(pos%2!=0)
		{
			if(3*w-bonus>=w/2+1-2*radius&&3*w-bonus<=w/16+w/2+1)
			{
				cat=true;
				bonus_check=true;
			}
		}

		ctx.fillStyle="black";
		ctx.fillRect(3*w/2-i,2*(h/3),w/6,h/3);

		ctx.fillRect(2*w-ceiling_movement,0,w/6,h/3);
		i+=i_fast;
		bonus+=i_fast;
		ceiling_movement+=i_fast;
		i_dupl++;
		if(i_dupl>1000)
		{
			i_dupl=0;
			if(i_fast<8)
			i_fast++;
		}
		
		ctx.beginPath();
		ctx.clearRect(w+w/2+radius-i+i_fast-radius+w/2,h/3+radius-radius+obstacle_move,2*radius,2*radius);
		if(obstacle_down==0)
		{
			obstacle_move++;
			if(obstacle_move==h/3-2*radius)
			obstacle_down=1;
		}
		else
		{
			obstacle_move--;
			if(obstacle_move==0)
			obstacle_down=0;
		}
		ctx.arc(w+w/2+radius-i+w/2,h/3+radius+obstacle_move,radius,0,Math.PI*2,true);
		ctx.fillStyle="red";
		ctx.fill();
		

		if(pos%2==0)
		{
			if(!cat)
			if(w+w/2+radius-i+w/2>=w/2+1&&w+w/2+radius-i+w/2<=w/16+w/2+1)
			if(h/3+radius+obstacle_move<=2*h/3&&h/3+radius+obstacle_move>=2*h/3-h/8)
			{
				j=h/3;
				pos1=pos;
				game_situation=false;
				game_over_condition=true;
				game_over();
				high_score_display();
			}
		}
		else
		{
			if(!cat)
			if(w+w/2+radius-i+w/2>=w/2+1&&w+w/2+radius-i+w/2<=w/16+w/2+1)
			if(h/3+radius+obstacle_move>=h/3&&h/3+radius+obstacle_move<=h/3+h/8)
			{
				j=h/3;
				pos1=pos;
				game_situation=false;
				game_over_condition=true;
				game_over();
				high_score_display();
			}
		}

		
		if(ceiling_movement-i>=2*w/3||ceiling_movement-i<=w/3)
		{
			ctx.clearRect(3*w/2-i,2*(h/3),w/6,h/3);
			ctx.clearRect(2*w-ceiling_movement,0,w/6,h/3);
		}

			if(i>13*w/6)
				i=w/2;
			if(ceiling_movement>13*w/6)
				ceiling_movement=w/3;
			if(bonus>3*w+3*radius)
				{
					bonus=0;
				}
				
			if(ceiling_movement-i>=2*w/3||ceiling_movement-i<=w/3)
			{

			if(pos%2==0&&!cat)
				if((w/2+1)>(3*w/2-i)&&(9*w/16+1)<(5*w/3-i))
					{
						pos1=pos;
						game_situation=false;
						game_over_condition=true;
						game_over();
						high_score_display();
					}

			if(pos%2!=0&&!cat)
				if((w/2+1)>(2*w-ceiling_movement)&&(9*w/16+1)<(13*w/6-ceiling_movement))
					{
						pos1=pos;
						game_situation=false;
						game_over_condition=true;
						game_over();
						high_score_display();
					}
			}
	}
	}
}



function high_score_display()
{
	let score=0;
	high_score=localStorage.getItem("high_score");	
	if(high_score<current_score)
	{
		localStorage.setItem("high_score",current_score);
		hs[0].textContent=current_score;
		score++;
	}
	if(score==0)
	hs[0].textContent=high_score;
}



function game_over()
{
	game_over_movement++;
	if(game_over_condition)
	{
		j++;
		if(pos1%2==0)
		{
			if(j<=h/3)
			{
				ctx.clearRect(w/2+1,2*h/3-h/8+j-1,w/16,h/8);
				ctx.fillStyle="blue";
					ctx.beginPath();
					ctx.moveTo(w/2+1,2*h/3+j);
					ctx.lineTo(w/28+w/2+1,2*h/3-h/8+j);
					ctx.lineTo(w/16+w/2+1,2*h/3+j);
					ctx.fill();
			}
		}

		else
		{
			if(j<=h/3)
			{
				ctx.clearRect(w/2+1,h/3-j+1,w/16,h/8);
				ctx.fillStyle="blue";
					ctx.beginPath();
					ctx.moveTo(0+w/2+1,h/3-j);
					ctx.lineTo(w/28+w/2+1,h/3+h/8-j);
					ctx.lineTo(w/16+w/2+1,h/3-j);
					ctx.fill();

			}
		}
		if(j==h/3+1)
		alert("Game Over");
	}
}


function bonus_count()
{
	if(bonus_check)
	{
		t++;
		if(t==1)
		{	cat=false;
			t=0;
			bonus_check=false;
		}
	}
}