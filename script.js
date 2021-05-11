//canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=500;


let score=0;
let gameFrame=0;
ctx.font= '50px Georgia';
let gameSpeed =1;
let gameOver = false;
let restartButton =false;


//mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}

canvas.addEventListener('mousedown',function(event){
    mouse.click =true;
    mouse.x =event.x- canvasPosition.left;
    mouse.y =event.y- canvasPosition.top;
   // console.log(event);
});

canvas.addEventListener('mouseup',function(){
    mouse.click=false;
});

//player(plane)

const playerLeft = new Image();
playerLeft.src = 'plane_3_red.png';

const playerRight =new Image();
playerRight.src = 'plane_3_red_right.png';

class Player {
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 20;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 925;
        this.spriteHeight = 455 ;
    }

    update(){
        const dx = this.x-mouse.x;
        const dy = this.y-mouse.y;

        let theta = Math.atan2(dy,dx);
        this.angle =theta;
        if(mouse.x != this.x){
            this.x -= dx/30;
            
        }
        if(mouse.y != this.y){
            this.y -= dy/30;

        }
    }

    draw(){
        if(mouse.click){
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
            
        }
       /* ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();*/

        ctx.fillRect(this.x,this.y,this.radius,10);

        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        if(this.x >= mouse.x){
            ctx.drawImage(
                playerLeft ,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                0-60,
                0-40,
                this.spriteWidth/7,
                this.spriteHeight/7,
                );

        }

        else{
            ctx.drawImage(
                playerRight ,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                0-60,
                0-40,
                this.spriteWidth/7,
                this.spriteHeight/7,
                );
        }
        ctx.restore();

    }
}

const player = new Player();



//coin
const bronzeCoinArray = [];
const silverCoinArray = [];
const goldCoinArray = [];

const bronzeCoin = new Image();
bronzeCoin.src='__bronze_coin_fly_up_down_movement.png';

class BronzeCoin {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height+ 100;
        this.distance;
        this.counted = false;
        this.radius = 30;
        this.speed = Math.random() * 5 + 1;
        this.sound ='sound1';
        this.frame=0;
        this.frameX=0;
        this.frameY=0;
        this.spriteWidth=276;
        this.spriteHeight=254;

    }
    
    draw(){
       /* ctx.fillStyle='blue';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();*/
        ctx.drawImage(bronzeCoin,this.frameX*this.spriteWidth,
            this.frameY*this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x-65,this.y-60,this.spriteWidth/1.75,this.spriteHeight/1.75);
    }
    update(){
        this.y -= this.speed;
        const dx =this.x-player.x;
        const dy =this.y-player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);

        if(gameFrame % 5 == 0){
            this.frame++;
            if(this.frame >= 15) this.frame = 0;
            if(this.frame == 2 || this.frame == 5 || this.frame == 8 || this.frame == 11 || this.frame == 14 ){
                this.frameY = 0;
            } else{
                this.frameY++;
            }
        }
        
    }
}
const bronzecoin = new BronzeCoin();

const silverCoin = new Image();
silverCoin.src='__silver_coin_fly_up_down_movement.png';

class SilverCoin {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height+ 100;
        this.distance;
        this.counted = false;
        this.radius = 20;
        this.speed = Math.random() * 8 + 1;
        this.sound ='sound2';
        this.frame=0;
        this.frameX=0;
        this.frameY=0;
        this.spriteWidth=276;
        this.spriteHeight=254;
    }
    
    draw(){
        /*ctx.fillStyle='green';
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();*/
        ctx.drawImage(silverCoin,this.frameX*this.spriteWidth,
            this.frameY*this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x-65,this.y-60,this.spriteWidth/2,this.spriteHeight/2);
    }
    update(){
        this.y -= this.speed;
        const dx =this.x-player.x;
        const dy =this.y-player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
        if(gameFrame % 5 == 0){
            this.frame++;
            if(this.frame >= 15) this.frame = 0;
            if(this.frame == 2 || this.frame == 5 || this.frame == 8 || this.frame == 11 || this.frame == 14 ){
                this.frameY = 0;
            } else{
                this.frameY++;
            }
        }
    }
}

const silvercoin = new SilverCoin();

const goldCoin = new Image();
goldCoin.src='__gold_coin_fly_up_down_movement.png';

class GoldCoin {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height+ 100;
        this.distance;
        this.counted = false;
        this.radius = 10;
        this.speed = Math.random() *10 + 1;
        this.sound ='sound2';
        this.frame=0;
        this.frameX=0;
        this.frameY=0;
        this.spriteWidth=276;
        this.spriteHeight=254;
    }
    
    draw(){
       /* ctx.fillStyle='yellow';
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();*/
        ctx.drawImage(goldCoin,this.frameX*this.spriteWidth,
            this.frameY*this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x-65,this.y-60,this.spriteWidth/2.5,this.spriteHeight/2.5);
    }
    update(){
        this.y -= this.speed;
        const dx =this.x-player.x;
        const dy =this.y-player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
        if(gameFrame % 5 == 0){
            this.frame++;
            if(this.frame >= 15) this.frame = 0;
            if(this.frame == 2 || this.frame == 5 || this.frame == 8 || this.frame == 11 || this.frame == 14 ){
                this.frameY = 0;
            } else{
                this.frameY++;
            }
        }
    }
}

const goldcoin = new GoldCoin();

const bronzeCoinPop1 = document.createElement('audio');
bronzeCoinPop1.src='sound1.ogg';

function handleBronzeCoin(){
    bronzecoin.update();
    bronzecoin.draw();
    if(gameFrame % 50 == 0 ){
        bronzeCoinArray.push(new BronzeCoin());
    }
    for(let i = 0; i < bronzeCoinArray.length/20;i++){
        bronzeCoinArray[i].update();
        bronzeCoinArray[i].draw();
        if(bronzeCoinArray[i].y < 0 - bronzeCoinArray[i].radius * 2){
            bronzeCoinArray.splice(i,1);
            i--;
        }
        
        else if(bronzeCoinArray[i].distance<bronzeCoinArray[i].radius+ player.radius){
            if(!bronzeCoinArray[i].counted){
                if(bronzeCoinArray[i].sound == 'sound1'){
                    bronzeCoinPop1.play();
                }
                score++;
                bronzeCoinArray[i].counted=true;
                bronzeCoinArray.splice(i,1);
                i--;
            }
                
        }
        
    }
}

const silverCoinPop1 = document.createElement('audio');
silverCoinPop1.src='sound2.ogg';

function handleSilverCoin(){
   silvercoin.update();
   silvercoin.draw();
    if(gameFrame % 50 == 0 ){
        silverCoinArray.push(new SilverCoin());
    }
    for(let i = 0; i < silverCoinArray.length/50;i++){
        silverCoinArray[i].update();
        silverCoinArray[i].draw();
        if(silverCoinArray[i].y < 0 - silverCoinArray[i].radius * 2){
            silverCoinArray.splice(i,1);
            i--;
        }
        
        else if(silverCoinArray[i].distance<silverCoinArray[i].radius+ player.radius){
            if(!silverCoinArray[i].counted){
                if(silverCoinArray[i].sound == 'sound2'){
                    silverCoinPop1.play();
                }
                score+=10;
                silverCoinArray[i].counted=true;
                silverCoinArray.splice(i,1);
                i--;
            }
                
        }
        
    }
       
    
}

const goldCoinPop1 = document.createElement('audio');
goldCoinPop1.src='sound3.ogg';

function handleGoldCoin(){
    if(gameFrame % 50 == 0 ){
        goldCoinArray.push(new GoldCoin());
    }
    for(let i = 0; i < goldCoinArray.length/100;i++){
        goldCoinArray[i].update();
        goldCoinArray[i].draw();
        if(goldCoinArray[i].y < 0 - goldCoinArray[i].radius * 2){
            goldCoinArray.splice(i,1);
            i--;
        }
        
        else if(goldCoinArray[i].distance<goldCoinArray[i].radius+ player.radius){
            if(!goldCoinArray[i].counted){
                 if(goldCoinArray[i].sound == 'sound2'){
                        goldCoinPop1.play();
                }
                score+=50;
                goldCoinArray[i].counted=true;
                goldCoinArray.splice(i,1);
                i--;
            }
                
        }
        
    }
       
 
}

//repeating background
const background = new Image();
background.src = 'sky_color.png';

const background_cloud_1 =new Image();
background_cloud_1.src='mid_ground_cloud_1.png';

const background_cloud_2 =new Image();
background_cloud_2.src='mid_ground_cloud_2.png';

const farground_mountains =new Image();
farground_mountains.src='farground_mountains.png';

const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}



function handleBackground(){
    BG.x1--;
    ctx.drawImage(background,0,0,canvas.width,canvas.height);

    ctx.drawImage(background_cloud_1,0,50,canvas.width,canvas.height);

    ctx.drawImage(background_cloud_2,0,140,canvas.width,canvas.height);
    BG.x1-=gameSpeed;
    if(BG.x1<-BG.width){
        BG.x1=BG.width;
    }
    BG.x2-=gameSpeed*2;
    if(BG.x2<-BG.width){
        BG.x2=BG.width;
    }
    ctx.drawImage(farground_mountains,BG.x1,BG.y+250,canvas.width,canvas.height);
    ctx.drawImage(farground_mountains,BG.x2,BG.y+250,canvas.width,canvas.height);

    

}

//torpedo(enemies)
const enemyImage = new Image();
enemyImage.src ='torpedo_black.png';

class Enemy {
    constructor(){
        this.x = canvas.width + 200;
        this.y = Math.random() * (canvas.height - 150) + 90;
        this.radius = 40;
        this.speed = Math.random() * 8 + 2;
        this.frame = 0; 
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 187;

    }
    draw(){
       /* ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();*/
        ctx.drawImage(enemyImage ,this.x-40,this.y-20,this.radius*2,this.radius);

    }

    update(){
        this.x -= this.speed; 
        if(this.x < 0 - this.radius * 2){
            this.x = canvas.width + 200;
            this.y = Math.random() * (canvas.height - 150) + 90;
            this.speed = Math.random() * 2 + 2;
        }

        //explosion

        const dx = this.x - player.x;
        const dy = this.y - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if(distance < this.radius + player.radius){
            handleGameOver();

        }

    }
}

const enemy = new Enemy();


function handleEnemies(){
    enemy.draw();
    enemy.update();

}





function handleGameOver(){
        
    ctx.fillStyle = 'black';
    ctx.fillText('GAME OVER SCORE:'+score,130,250);
    gameOver = true;


}
//animation loop
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleBackground();
    handleBronzeCoin();
    handleSilverCoin();
    handleGoldCoin();
    
    player.update();
    player.draw();
    handleEnemies()
    ctx.fillStyle='black';
    ctx.fillText('score: ' +score ,7,30);
    gameFrame++;
    
    if(!gameOver) requestAnimationFrame(animate);
    
}

animate();

window.addEventListener('resize',function(){
    canvasPosition = canvas.getBoundingClientRect();
});
