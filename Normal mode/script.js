let w=window.innerWidth;
let h=window.innerHeight;
let high_score;
let current_score=0;
let j=0;
let speed=0;
let cs=document.getElementsByClassName("current_score");
let hs=document.getElementsByClassName("high_score");
let pos1;

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

h-=50;
for(let i=h;i>=1;i--)
{
	if(h%24==0)
	{
		break;
	}
	h--;
}

let i=0;
let pos=0;

window.setInterval(draw,1);
window.setInterval(game_over,10);

let canvas=document.getElementById("canvas");
canvas.setAttribute("width",w);
canvas.setAttribute("height",h);

let ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.fillRect(0,0,w,h/3);
ctx.fillRect(0,2*h/3,w,h/3);
ctx.fillStyle="blue";
ctx.fillRect(0,2*(h/3)-h/8,w/16,h/8);




window.onclick=function()
{
	pos++;
}
window.addEventListener("keydown",e =>
		{
			const keyName = event.key;
			if(keyName==" ")
			pos++;
		})



function draw()
{	
	cs[0].textContent=current_score;
	if(i%50==0)
		current_score++;
	if(game_situation)
	{
		speed++;
		if(i<=w/2)
	{
		ctx.clearRect(i,2*(h/3)-h/8,w/16,h/8);
		ctx.clearRect(i,h/3,w/16,h/8);

				if(pos%2==0)
				{
					i++;
					ctx.fillStyle="blue";
					ctx.fillRect(i,2*(h/3)-h/8,w/16,h/8);
				}

				else
				{
					i++;
					ctx.fillStyle="blue";
					ctx.fillRect(i,h/3,w/16,h/8);
				}
	}
	else
	{
		speed++;
		ctx.clearRect(w/2+1,2*(h/3)-h/8,w/16,h/8);
		ctx.clearRect(w/2+1,h/3,w/16,h/8);
				if(pos%2==0)
				{
					ctx.fillStyle="blue";
					ctx.fillRect(w/2+1,2*(h/3)-h/8,w/16,h/8);
				}

				else
				{
					ctx.fillStyle="blue";
					ctx.fillRect(w/2+1,h/3,w/16,h/8);
				}

		ctx.fillStyle="black";
		ctx.fillRect(3*w/2-i,2*(h/3),w/6,h/3);
		
		ctx.fillRect(2*w-i,0,w/6,h/3);
		i++;
		ctx.clearRect(3*w/2-i,2*(h/3),w/6,h/3);
		ctx.clearRect(2*w-i,0,w/6,h/3);
				if(i==13*w/6)
					i=w/2;

		if(pos%2==0)
			if((w/2+1)>(3*w/2-i)&&(9*w/16+1)<(5*w/3-i))
				{
					pos1=pos;
					game_situation=false;
					game_over_condition=true;
					game_over();
					// alert("Game over");
					high_score_display();
				}

		if(pos%2!=0)
			if((w/2+1)>(2*w-i)&&(9*w/16+1)<(13*w/6-i))
				{
					pos1=pos;
					game_situation=false;
					game_over_condition=true;
					game_over();
					// alert("Game over");
					high_score_display();
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
	if(game_over_condition)
	{
		j++;
		if(pos1%2==0)
		{
			if(j<=h/3)
			{
				ctx.clearRect(w/2+1,2*h/3-h/8+j-1,w/16,h/8);
				ctx.fillStyle="blue";
				ctx.fillRect(w/2+1,2*h/3-h/8+j,w/16,h/8);
			}
		}

		else
		{
			if(j<=h/3)
			{
				ctx.clearRect(w/2+1,h/3-j+1,w/16,h/8);
				ctx.fillStyle="blue";
				ctx.fillRect(w/2+1,h/3-j,w/16,h/8);
			}
		}
		if(j==h/3)
		alert("Game Over");
	}
}