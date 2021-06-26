let canvas=document.getElementById("canvas");
let cnx=canvas.getContext("2d");

window.setInterval(runner,1);
let i=-1;
let j=0;
let k=-1;
let l=-630;
let score=0;
let m=0;
let n=1;
let z=0;

let score1=document.getElementsByClassName("score");
let score2=document.getElementsByClassName("highscore");

window.onclick=function()
{
  j++;
  m++;
}

function runner()
{if(n==1)
  {
          i++;
          k++;
          l++;
          cnx.beginPath();
        cnx.moveTo(0,100);
        cnx.lineTo(1260,100);
        cnx.lineTo(1260,0);
        cnx.lineTo(0,0);
        cnx.lineTo(0,100);
        cnx.fillStyle="Black";
        cnx.fill();
        cnx.clearRect(1260-l,0,180,100);
        if(l>1440)
        l=-490;


        cnx.beginPath();
        cnx.moveTo(0,330);
        cnx.lineTo(1260,330);
        cnx.lineTo(1260,580);
        cnx.lineTo(0,580);
        cnx.lineTo(0,330);
        cnx.fillStyle="Black";
        cnx.fill();
        cnx.clearRect(1260-k,330,180,250);
        if(k>1440)
        k=-1;


        if(i<630)
        {     cnx.clearRect(0+i-1,260,60,70);
                if(j%2==0)
                {
                  cnx.beginPath();
                  cnx.moveTo(0+i,330);
                  cnx.lineTo(0+i,260);
                  cnx.lineTo(60+i,260);
                  cnx.lineTo(60+i,330);
                  cnx.lineTo(0+i,330);
                  cnx.fillStyle="RoyalBlue";
                  cnx.fill();
                }
        }


        if(i<630)
        {   cnx.clearRect(0+i-1,100,60,70);
            if(j%2!=0)
            {
              cnx.beginPath();
              cnx.moveTo(0+i,100);
              cnx.lineTo(60+i,100);
              cnx.lineTo(60+i,170);
              cnx.lineTo(0+i,170);
              cnx.lineTo(0+i,100);
              cnx.fillStyle="RoyalBlue";
              cnx.fill();
            }
        }

        if(i>=(1260-k)&&i<=1380-k)
        { if(m%2==0)
          {
          n++;
          }
        }

        if(1260-k<=629&&1260-k>=510)
        { if(m%2==0)
            {n++;
            }
        }

        if(1260-l<=629&&1260-l>=510)
        { if(m%2!=0)
          {
          n++;
          }
        }


        if(i>=630)
        { cnx.clearRect(629,260,61,70);
            if(j%2==0)
            {
              cnx.beginPath();
              cnx.moveTo(630,330);
              cnx.lineTo(630,260);
              cnx.lineTo(690,260);
              cnx.lineTo(690,330);
              cnx.lineTo(630,330);
              cnx.fillStyle="RoyalBlue";
              cnx.fill();
            }
        }


        if(i>=630)
        { cnx.clearRect(629,100,61,70);
            if(j%2!=0)
            {
              cnx.beginPath();
              cnx.moveTo(630,100);
              cnx.lineTo(690,100);
              cnx.lineTo(690,170);
              cnx.lineTo(630,170);
              cnx.lineTo(630,100);
              cnx.fillStyle="RoyalBlue";
              cnx.fill();
            }
        }


        if(i%500==0)
        { score++;
          score1[0].textContent=score;
        }
  }

  if(n==2)
    {   let x=0;
        let hscore=localStorage.getItem("hscore");
        if(score>hscore)
         {  localStorage.setItem("hscore",score);
            score2[0].textContent=score;
            x++;
          }
        if(x==0)
          score2[0].textContent=hscore;   
          n++;
    }
    if(n==3)
    {
      z++;
          if(z=100)
            {alert("Game Over");
          n++;
        }
    }
}