import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from "./Snake.js";

import { outsideGrid } from "./Grid.js";

import { update as updateFood, draw as drawFood } from "./Food.js";

let lastPaintTime = 0;
let gameOver = false;
const canvas = document.getElementById('canvas');

// Game loop
function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/';
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastPaintTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return

    console.log('Render')
    lastPaintTime = currentTime

    update()
    draw()
}
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    canvas.innerHTML = '';
    drawSnake(canvas);
    drawFood(canvas);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



// const snake = document.getElementById("snake");

// let snakeX = 0;
// let snakeY = 0;
// let snakeXSpeed = 0;
// let snakeYSpeed = 0;

// let inputDir = {x: 0, y: 0}; 

// let speed = 19;
// let score = 0;
// let lastPaintTime = 0;
// let snakeArr = [
//     {x: 13, y: 15}
// ];
// food = {x: 6, y: 7};

// // Random snake position
// function randomSnakePosition() {
//     snakeX = Math.floor(Math.random() * 10) * 20;
//     snakeY = Math.floor(Math.random() * 10) * 20;
//     snake.style.left = `${snakeX}px`;
//     snake.style.top = `${snakeY}px`;
// }
// randomSnakePosition();

// // Game loop function
// function main(currentTime) {
//     window.requestAnimationFrame(main);
//     // console.log(currentTime)
//     if((currentTime - lastPaintTime)/1000 < 1/speed){
//         return;
//     }
//     lastPaintTime = currentTime;
//     gameEngine();
// }

// function gameEngine(){

//     // Moving the snake
//     for (let i = snakeArr.length - 2; i>=0; i--) { 
//         snakeArr[i+1] = {...snakeArr[i]};
//     }
//     snakeArr[0].x += inputDir.x;
//     snakeArr[0].y += inputDir.y;
// }