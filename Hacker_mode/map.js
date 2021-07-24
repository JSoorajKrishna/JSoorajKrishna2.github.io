let w=window.innerWidth;
let h=window.innerHeight;
let j=0;
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


for(let i=w_;i>=1;i--)
{
	if(w_%96==0)
	{
		break;
	}
	w_--;
}

h_-=250;

for(let i=h_;i>=1;i--)
{
	if(h_%24==0)
	{
		break;
	}
	h_--;
}

let i=0;
let i_fast=1;
let i_dupl=1;
let pos=0;

window.setInterval(draw_,1);
window.setInterval(game_over_,10);
window.setInterval(bonus_count_,7000);

let canvas=document.getElementById("canvas");
canvas.setAttribute("width",w_);
canvas.setAttribute("height",h_);

let ctx_=canvas.getContext("2d");

ctx_.beginPath();
ctx_.fillRect(0,0,w_,h_/3);
ctx_.fillRect(0,2*h_/3,w_,h_/3);
ctx_.fillStyle="blue";
ctx_.moveTo(0,2*h_/3);
ctx_.lineTo(w_/28,2*h_/3-h_/8);
ctx_.lineTo(w_/16,2*h_/3);
ctx_.fill();


window.onclick=function()
{
	pos_++;
}
window.addEventListener("keydown",e =>
		{
			const keyName = event.key;
			if(keyName==" ")
			{
				pos_++;
			}
		})



function draw_()
{
	
	if(game_situation_)
	{

		if(i_<=w_/2)
	{
		ctx_.clearRect(i_,2*(h_/3)-h_/8,w_/16,h_/8);
		ctx_.clearRect(i_,h_/3,w_/16,h_/8);

				if(pos_%2==0)
				{
					i_++;
					ctx_.fillStyle="blue";
					ctx_.beginPath();
					ctx_.moveTo(i_,2*h_/3);
					ctx_.lineTo(w_/28+i_,2*h_/3-h_/8);
					ctx_.lineTo(w_/16+i_,2*h_/3);
					ctx_.fill();
				}

				else
				{
					i_++;
					ctx_.fillStyle="blue";
					ctx_.beginPath();
					ctx_.moveTo(0+i_,h_/3);
					ctx_.lineTo(w_/28+i_,h_/3+h_/8);
					ctx_.lineTo(w_/16+i_,h_/3);
					ctx_.fill();
				}
	}
	else
	{
		ctx_.clearRect(w_/2+1,2*(h_/3)-h_/8,w_/16,h_/8);
		ctx_.clearRect(w_/2+1,h_/3,w_/16,h_/8);
				if(pos_%2==0)
				{
					ctx_.fillStyle="blue";
					if(cat_)
					ctx_.fillStyle="RoyalBlue";
					ctx_.beginPath();
					ctx_.moveTo(w_/2+1,2*h_/3);
					ctx_.lineTo(w_/28+w_/2+1,2*h_/3-h_/8);
					ctx_.lineTo(w_/16+w_/2+1,2*h_/3);
					ctx_.fill();
				}

				else
				{
					ctx_.fillStyle="blue";
					if(cat_)
					ctx_.fillStyle="RoyalBlue";
					ctx_.beginPath();
					ctx_.moveTo(0+w_/2+1,h_/3);
					ctx_.lineTo(w_/28+w_/2+1,h_/3+h_/8);
					ctx_.lineTo(w_/16+w_/2+1,h_/3);
					ctx_.fill();
				}
		
		ctx_.clearRect(3*w_-bonus_+i_fast_,h_/3+10,2*radius_,2*radius_);
		ctx_.fillStyle="orange";
		if(cat_==false)
		ctx_.fillRect(3*w_-bonus_,h_/3+10,2*radius_,2*radius_);
		
		if(pos_%2!=0)
		{
			if(3*w_-bonus_>=w_/2+1-2*radius_&&3*w_-bonus_<=w_/16+w_/2+1)
			{
				cat_=true;
				bonus_check_=true;
			}
		}

		ctx_.fillStyle="black";
		ctx_.fillRect(3*w_/2-i_,2*(h_/3),w_/6,h_/3);

		ctx_.fillRect(2*w_-ceiling_movement_,0,w_/6,h_/3);
		i_+=i_fast_;
		bonus_+=i_fast_;
		ceiling_movement_+=i_fast_;
		i_dupl_++;
		if(i_dupl_>1000)
		{
			i_dupl_=0;
			if(i_fast_<8)
			i_fast_++;
		}
		
		ctx_.beginPath();
		ctx_.clearRect(w_+w_/2+radius_-i_+i_fast_-radius_+w_/2,h_/3+radius_-radius_+obstacle_move_,2*radius_,2*radius_);
		if(obstacle_down_==0)
		{
			obstacle_move_++;
			if(obstacle_move_==h_/3-2*radius_)
			obstacle_down_=1;
		}
		else
		{
			obstacle_move_--;
			if(obstacle_move_==0)
			obstacle_down_=0;
		}
		ctx_.arc(w_+w_/2+radius_-i_+w_/2,h_/3+radius_+obstacle_move_,radius_,0,Math.PI*2,true);
		ctx_.fillStyle="red";
		ctx_.fill();
		

		if(pos_%2==0)
		{
			if(!cat_)
			if(w_+w_/2+radius_-i_+w_/2>=w_/2+1&&w_+w_/2+radius_-i_+w_/2<=w_/16+w_/2+1)
			if(h_/3+radius_+obstacle_move_<=2*h_/3&&h_/3+radius_+obstacle_move_>=2*h_/3-h_/8)
			{
				j_=h_/3;
				pos1_=pos_;
				game_situation_=false;
				game_over_condition_=true;
				game_over_();
			}
		}
		else
		{
			if(!cat_)
			if(w_+w_/2+radius_-i_+w_/2>=w_/2+1&&w_+w_/2+radius_-i_+w_/2<=w_/16+w_/2+1)
			if(h_/3+radius_+obstacle_move_>=h_/3&&h_/3+radius_+obstacle_move_<=h_/3+h_/8)
			{
				j_=h_/3;
				pos1_=pos_;
				game_situation_=false;
				game_over_condition_=true;
				game_over_();
			}
		}

		
		if(ceiling_movement_-i_>=2*w_/3||ceiling_movement_-i_<=w_/3)
		{
			ctx_.clearRect(3*w_/2-i_,2*(h_/3),w_/6,h_/3);
			ctx_.clearRect(2*w_-ceiling_movement_,0,w_/6,h_/3);
		}

			if(i_>13*w_/6)
				i_=w_/2;
			if(ceiling_movement_>13*w_/6)
				ceiling_movement_=w_/3;
			if(bonus_>3*w_+3*radius_)
				{
					bonus_=0;
				}
				
			if(ceiling_movement_-i_>=2*w_/3||ceiling_movement_-i_<=w_/3)
			{

			if(pos_%2==0&&!cat_)
				if((w_/2+1)>(3*w_/2-i_)&&(9*w_/16+1)<(5*w_/3-i_))
					{
						pos1_=pos_;
						game_situation_=false;
						game_over_condition_=true;
						game_over_();
					}

			if(pos_%2!=0&&!cat_)
				if((w_/2+1)>(2*w_-ceiling_movement_)&&(9*w_/16+1)<(13*w_/6-ceiling_movement_))
					{
						pos1_=pos_;
						game_situation_=false;
						game_over_condition_=true;
						game_over_();
					}
			}
	}
	}
}





function game_over_()
{
	game_over_movement_++;
	if(game_over_condition_)
	{
		j_++;
		if(pos1_%2==0)
		{
			if(j_<=h_/3)
			{
				ctx_.clearRect(w_/2+1,2*h_/3-h_/8+j_-1,w_/16,h_/8);
				ctx_.fillStyle="blue";
					ctx_.beginPath();
					ctx_.moveTo(w_/2+1,2*h_/3+j_);
					ctx_.lineTo(w_/28+w_/2+1,2*h_/3-h_/8+j_);
					ctx_.lineTo(w_/16+w_/2+1,2*h_/3+j_);
					ctx_.fill();
			}
		}

		else
		{
			if(j_<=h_/3)
			{
				ctx_.clearRect(w_/2+1,h_/3-j_+1,w_/16,h_/8);
				ctx_.fillStyle="blue";
					ctx_.beginPath();
					ctx_.moveTo(0+w_/2+1,h_/3-j_);
					ctx_.lineTo(w_/28+w_/2+1,h_/3+h_/8-j_);
					ctx_.lineTo(w_/16+w_/2+1,h_/3-j_);
					ctx_.fill();

			}
		}
	}
}


function bonus_count_()
{
	if(bonus_check_)
	{
		t_++;
		if(t_==1)
		{	cat_=false;
			t_=0;
			bonus_check_=false;
		}
	}
}